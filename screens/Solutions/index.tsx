import {SafeAreaView, ScrollView} from 'react-native';
import {SolutionsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const Solutions = ({route, navigation}: SolutionsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInBlueBorder />
        <Btn title="Next" navigation={navigation} location="Situation" />
      </ScrollView>
    </SafeAreaView>
  );
};
