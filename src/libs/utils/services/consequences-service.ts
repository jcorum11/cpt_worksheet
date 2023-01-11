import {Dispatch, SetStateAction} from 'react';
import {saveConsequencesAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: string,
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'intended':
      callback(text);
      store.dispatch(saveConsequencesAnswer({answer: text, index: 0}));
      break;
    case 'unintended':
      callback(text);
      store.dispatch(saveConsequencesAnswer({answer: text, index: 1}));
      break;
    default:
      break;
  }
};
