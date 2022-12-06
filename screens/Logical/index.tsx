import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {LogicalProps} from '../../types/navigation';
import {Button} from '../../components/utils/Button';

export const Logical = ({route, navigation}: LogicalProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Are my thought realistic and logical</Text>
        <TextInput />
        <Button title="Next" navigation={navigation} location="Reflections" />
      </ScrollView>
    </SafeAreaView>
  );
};
