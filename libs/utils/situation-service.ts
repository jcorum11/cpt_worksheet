import {Dispatch, SetStateAction} from 'react';

export const result = {
  who: {question: 'Who were/are you with?', answer: ''},
  what: {question: 'What were/are you doing?', answer: ''},
  where: {question: 'Where were/are you?', answer: ''},
  when: {question: 'When did this happen?', answer: ''},
};

export const setField = (
  type: string,
  text: string,
  callback: Dispatch<SetStateAction<string>>,
) => {
  switch (type) {
    case 'who':
      callback(text);
      result.who.question = text;
      break;
    case 'what':
      callback(text);
      result.what.question = text;
      break;
    case 'where':
      callback(text);
      result.where.question = text;
      break;
    case 'when':
      callback(text);
      result.when.question = text;
      break;
    default:
      break;
  }
};
