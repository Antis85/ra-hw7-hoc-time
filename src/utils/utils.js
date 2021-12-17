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

export { getDateAgoString };
