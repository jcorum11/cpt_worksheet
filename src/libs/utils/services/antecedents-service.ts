import {Dispatch, SetStateAction} from 'react';
import {saveAntecedentAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';

export const setField = (
  type: 'antecedents',
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'antecedents':
      callback(text);
      store.dispatch(saveAntecedentAnswer(text));
      break;
    default:
      break;
  }
};
