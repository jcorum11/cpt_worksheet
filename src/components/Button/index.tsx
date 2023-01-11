import {Button} from 'react-native';
import {ButtonProps} from '../../libs/utils/types/component-props';

export const Btn = ({navigation, location, title, onPress}: ButtonProps) => {
  const callback = () => {
    if (onPress) onPress();
    if (navigation && location) navigation.navigate(location);
  };
  return <Button title={title} onPress={callback} />;
};
