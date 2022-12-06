import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {ConsequencesProps} from '../../types/navigation';
import {Button} from '../../components/utils/Button';

export const Consequences = ({route, navigation}: ConsequencesProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          What were the intended and unintended results of responding in that
          way?
        </Text>
        <Text>Intended</Text>
        <TextInput />
        <Text>Unintended</Text>
        <TextInput />
        <Button title="Next" navigation={navigation} location="Logical" />
      </ScrollView>
    </SafeAreaView>
  );
};
