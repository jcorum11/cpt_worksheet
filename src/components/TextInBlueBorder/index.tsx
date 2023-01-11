import {StyleSheet, TextInput} from 'react-native';
import {TextInputProps} from '../../libs/utils/types/component-props';

export const TextInBlueBorder = ({onChangeText}: TextInputProps) => {
  const callback = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
  };
  return (
    <TextInput style={styles.textInput} onChangeText={text => callback(text)} />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});
