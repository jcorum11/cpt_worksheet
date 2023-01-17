import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation';
import {MediumLogState} from './slice-state';

export type ButtonProps = {
  navigation?: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  location?: keyof RootStackParamList;
  title: string;
  onPress?: () => void;
};

export type TextInputProps = {
  onChangeText?: (text: string) => void;
};

export type LogProps = {
  log: MediumLogState;
};

export type QuestionAnswerProps = {
  question: string;
  answer: string;
};

export type QuestionAnswerArrayProps = {
  data: any[];
};
