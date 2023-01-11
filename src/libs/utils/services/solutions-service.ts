import {Dispatch, SetStateAction} from 'react';
import {saveSolutionsAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: 'solutions',
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'solutions':
      callback(text);
      store.dispatch(saveSolutionsAnswer(text));
      break;
    default:
      break;
  }
};
