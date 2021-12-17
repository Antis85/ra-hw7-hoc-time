import React from 'react';
import DateTime from './DateTime';
import withFormattedDate from '../hocs/withFormattedDate';

export default function Video(props) {
  const DateTimePretty = withFormattedDate(DateTime);
  return (
    <div className="video">
      <iframe
        title={props.date}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}
