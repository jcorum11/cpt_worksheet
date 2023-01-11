import {Dispatch, SetStateAction} from 'react';
import {saveUnhealthyThoughtsAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: string,
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'unhealthyThoughts':
      callback(text);
      store.dispatch(saveUnhealthyThoughtsAnswer(text));
      break;
    default:
      break;
  }
};
