import React from 'react';
import { getDateAgoString } from '../utils/utils';

const withFormattedDate = (Component) => {
  return (props) => {
    const newProps = {};
    if (props && props.date) {
      const { text, num } = getDateAgoString(props.date);
      newProps.date = num + ' ' + text + ' назад';
    }
    return <Component {...props} date={newProps.date} />;
  };
};

export default withFormattedDate;
