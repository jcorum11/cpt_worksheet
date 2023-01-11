import {Dispatch, SetStateAction} from 'react';
import {saveReflectionsAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: 'behaviors' | 'actions' | 'results' | 'affirmation',
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'behaviors':
      callback(text);
      store.dispatch(saveReflectionsAnswer({answer: text, index: 0}));
      break;
    case 'actions':
      callback(text);
      store.dispatch(saveReflectionsAnswer({answer: text, index: 1}));
      break;
    case 'results':
      callback(text);
      store.dispatch(saveReflectionsAnswer({answer: text, index: 2}));
      break;
    case 'affirmation':
      callback(text);
      store.dispatch(saveReflectionsAnswer({answer: text, index: 3}));
      break;
    default:
      break;
  }
};
