import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {FeelingsProps} from '../../libs/utils/types/navigation';
import {Button} from '../../components/Button';

export const Feelings = ({route, navigation}: FeelingsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>What were/are you feeling?</Text>
        <TextInput />
        <Button title="Next" navigation={navigation} location="Consequences" />
      </ScrollView>
    </SafeAreaView>
  );
};
