import React, { useState } from 'react';

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

const getDateDaysWords = (num, longNum) => {
  let text;
  switch (+num) {
    case 1:
      text = 'день';
      break;

    case 2:
    case 3:
    case 4:
      text = 'дня';
      break;

    default:
      text = 'дней';
      break;
  }
  // console.log('{ text, num }', { text, num: longNum || num });
  return { text, num: longNum || num };
};

const getDateHoursWords = (num, longNum) => {
  let text;
  switch (+num) {
    case 1:
      text = 'час';
      break;

    case 2:
    case 3:
    case 4:
      text = 'часа';
      break;

    default:
      text = 'часов';
      break;
  }
  // console.log('{ text, num }', { text, num: longNum || num });
  return { text, num: longNum || num };
};

const getDateMinutesWords = (num, longNum) => {
  let text;
  switch (+num) {
    case 1:
      text = 'минута';
      break;

    case 2:
    case 3:
    case 4:
      text = 'минуты';
      break;

    default:
      text = 'минут';
      break;
  }
  // console.log('{ text, num }', { text, num: longNum || num });
  return { text, num: longNum || num };
};

const getDateAgoString = (dateString) => {
  const deltaTimestamp = new Date().getTime() - new Date(dateString).getTime();
  const deltaMinutes = deltaTimestamp / 1000 / 60;
  const deltaHours = deltaMinutes / 60;
  const deltaDays = deltaHours / 24;

  if (deltaDays >= 1) {
    const num = deltaDays.toFixed(0);
    if (+num < 21) return getDateDaysWords(num);
    return getDateDaysWords(+num.split('').slice(-1), num);   
  }
  if (deltaHours >= 1) {
    const num = deltaHours.toFixed(0);
    if (+num < 21) return getDateHoursWords(num);
    return getDateHoursWords(+num.split('').slice(-1), num);  
  }
  const num = deltaMinutes.toFixed(0);
  if (+num < 21) return getDateMinutesWords(num);
  return getDateMinutesWords(+num.split('').slice(-1), num);  
};

const withFormattedDate = (Component) => {
  return ({ ...props }) => {
    const newProps = {};
    if (props && props.date) {
      const { text, num } = getDateAgoString(props.date);
      newProps.date = num + ' ' + text + ' назад';
    }
    return <Component {...props} date={newProps.date} />;
  };
};

const DateTimePretty = withFormattedDate(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => (
    <Video key={item.date} url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list, setList] = useState([    
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:33',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-16 00:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-15 22:48:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-15 10:48:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-11 19:48:00',
    },
  ]);

  return <VideoList list={list} />;
}
