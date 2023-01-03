import {SafeAreaView, ScrollView, Text} from 'react-native';
import {LogicalProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const Logical = ({route, navigation}: LogicalProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Are my thought realistic and logical</Text>
        <TextInBlueBorder />
        <Btn title="Next" navigation={navigation} location="Reflections" />
      </ScrollView>
    </SafeAreaView>
  );
};
