import {Dispatch, SetStateAction} from 'react';
import {saveSolutionsAnswer} from 'libs/store/medium-log-slice';
import store from 'libs/store/store';
import api from 'api';

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

export const post = () => {
  const uid = store.getState().user.uid;
  const log = store.getState().mediumLog.current;
  console.log(uid);
  if (uid !== undefined) {
    api.mediumLog.post(log, uid);
  }
};
