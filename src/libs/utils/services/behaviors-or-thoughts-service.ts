import {Dispatch, SetStateAction} from 'react';
import {saveBehaviorsOrThoughtsAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: 'do' | 'tell',
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'do':
      callback(text);
      store.dispatch(saveBehaviorsOrThoughtsAnswer({answer: text, index: 0}));
      break;
    case 'tell':
      callback(text);
      store.dispatch(saveBehaviorsOrThoughtsAnswer({answer: text, index: 1}));
      break;
    default:
      break;
  }
};
