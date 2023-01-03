import {SafeAreaView, ScrollView, Text} from 'react-native';
import {FeelingsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const Feelings = ({route, navigation}: FeelingsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>What were/are you feeling?</Text>
        <TextInBlueBorder />
        <Btn title="Next" navigation={navigation} location="Consequences" />
      </ScrollView>
    </SafeAreaView>
  );
};
