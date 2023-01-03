import {SafeAreaView, ScrollView, Text} from 'react-native';
import {ReflectionsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const Reflections = ({route, navigation}: ReflectionsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>What do you notice now about your behaviors?</Text>
        <TextInBlueBorder />
        <Text>
          Did any of your actions result in good feelings like pleasure or
          relief, at least in the short-term?
        </Text>
        <TextInBlueBorder />
        <Text>
          If you carry on acting in those ways, what do you think the long-term
          result will be?
        </Text>
        <TextInBlueBorder />
        <Text>
          What can you tell yourself the next time you start to feel and do
          these behaviors?
        </Text>
        <TextInBlueBorder />
        <Btn title="Next" navigation={navigation} location="Solutions" />
      </ScrollView>
    </SafeAreaView>
  );
};
