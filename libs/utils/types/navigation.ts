import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  UnhealthyThoughts: undefined;
  Antecedents: undefined;
  Situation: undefined;
  BehaviorsOrThoughts: undefined;
  Feelings: undefined;
  Consequences: undefined;
  Logical: undefined;
  Reflections: undefined;
  Solutions: undefined;
};

export type UnhealthyThoughtsProps = NativeStackScreenProps<
  RootStackParamList,
  'UnhealthyThoughts'
>;
export type AntecedentsProps = NativeStackScreenProps<
  RootStackParamList,
  'Antecedents'
>;
export type SituationProps = NativeStackScreenProps<
  RootStackParamList,
  'Situation'
>;
export type BehaviorsOrThoughtsProps = NativeStackScreenProps<
  RootStackParamList,
  'BehaviorsOrThoughts'
>;
export type FeelingsProps = NativeStackScreenProps<
  RootStackParamList,
  'Feelings'
>;
export type ConsequencesProps = NativeStackScreenProps<
  RootStackParamList,
  'Consequences'
>;
export type LogicalProps = NativeStackScreenProps<
  RootStackParamList,
  'Logical'
>;
export type ReflectionsProps = NativeStackScreenProps<
  RootStackParamList,
  'Reflections'
>;
export type SolutionsProps = NativeStackScreenProps<
  RootStackParamList,
  'Solutions'
>;
