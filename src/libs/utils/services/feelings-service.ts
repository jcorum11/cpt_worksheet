import {Dispatch, SetStateAction} from 'react';
import store from 'libs/store/store';
import {saveFeelingsAnswer} from 'libs/store/medium-log-slice';

export const setField = (
  type: string,
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'feelings':
      callback(text);
      store.dispatch(saveFeelingsAnswer(text));
      break;
    default:
      break;
  }
};
