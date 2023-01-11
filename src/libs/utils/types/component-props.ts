import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation';

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
