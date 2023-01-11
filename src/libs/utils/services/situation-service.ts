import {Dispatch, SetStateAction} from 'react';
import {saveSituationAnswer} from 'libs/store/medium-log-slice';
import store from '../../store/store';

export const setField = (
  type: string,
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'who':
      callback(text);
      store.dispatch(saveSituationAnswer({answer: text, index: 0}));
      break;
    case 'what':
      callback(text);
      store.dispatch(saveSituationAnswer({answer: text, index: 1}));
      break;
    case 'where':
      callback(text);
      store.dispatch(saveSituationAnswer({answer: text, index: 2}));
      break;
    case 'when':
      callback(text);
      store.dispatch(saveSituationAnswer({answer: text, index: 3}));
      break;
    default:
      break;
  }
};
