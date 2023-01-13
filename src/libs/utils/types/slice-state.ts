import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {QuestionAnswer} from './answers';

// Define a type for the slice state
export type MediumLogState = {
  antecedents: QuestionAnswer;
  behaviorsOrThoughts: QuestionAnswer[];
  consequences: QuestionAnswer[];
  feelings: QuestionAnswer;
  logical: QuestionAnswer;
  reflections: QuestionAnswer[];
  situation: QuestionAnswer[];
  solutions: QuestionAnswer;
  unhealthyThoughts: {question: string; answer: string};
};

export type UserState = {
  userInfo: FirebaseAuthTypes.UserCredential | undefined;
  password: string;
};
