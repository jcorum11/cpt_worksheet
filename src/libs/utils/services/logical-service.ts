import {Dispatch, SetStateAction} from 'react';
import {saveLogicalAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: 'logical',
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'logical':
      callback(text);
      store.dispatch(saveLogicalAnswer(text));
      break;
    default:
      break;
  }
};
