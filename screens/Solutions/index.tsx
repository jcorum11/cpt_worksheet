import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {SolutionsProps} from '../../types/navigation';
import {Button} from '../../components/utils/Button';

export const Solutions = ({route, navigation}: SolutionsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput />
        <Button title="Next" navigation={navigation} location="Situation" />
      </ScrollView>
    </SafeAreaView>
  );
};
