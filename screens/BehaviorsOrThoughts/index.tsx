import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {BehaviorsOrThoughtsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const BehaviorsOrThoughts = ({
  route,
  navigation,
}: BehaviorsOrThoughtsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>
            A. What did you do or doing? Behaviors can be observable to other
            people, or can be the things we do or say to ourselves in our minds.
          </Text>
          <TextInBlueBorder />
          <Text>
            B. What did you tell (or currently telling) yourself? What Unhelpful
            thinking style did you use?
          </Text>
          <TextInBlueBorder />
          <Btn title="Next" navigation={navigation} location="Feelings" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
