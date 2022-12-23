import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {LogicalProps} from '../../libs/utils/types/navigation';
import {Button} from '../../components/Button';

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
