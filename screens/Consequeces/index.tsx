import {SafeAreaView, ScrollView, Text} from 'react-native';
import {ConsequencesProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const Consequences = ({route, navigation}: ConsequencesProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          What were the intended and unintended results of responding in that
          way?
        </Text>
        <Text>Intended</Text>
        <TextInBlueBorder />
        <Text>Unintended</Text>
        <TextInBlueBorder />
        <Btn title="Next" navigation={navigation} location="Logical" />
      </ScrollView>
    </SafeAreaView>
  );
};
