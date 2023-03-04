import {QuestionAnswer} from './answers';

// Define a type for the slice state
export type MediumLogState = {
  [key: string]: QuestionAnswer | QuestionAnswer[]
  antecedents: QuestionAnswer;
  behaviorsOrThoughts: QuestionAnswer[];
  consequences: QuestionAnswer[];
  feelings: QuestionAnswer;
  logical: QuestionAnswer;
  reflections: QuestionAnswer[];
  situation: QuestionAnswer[];
  solutions: QuestionAnswer;
  unhealthyThoughts: QuestionAnswer;
};

export type Logs = {
  current: MediumLogState;
  legacy: MediumLogState[];
};

export type UserState = {
  uid: string | undefined;
  password: string;
};
