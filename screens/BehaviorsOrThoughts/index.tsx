import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {BehaviorsOrThoughtsProps} from '../../libs/utils/types/navigation';
import {Button} from '../../components/Button';

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
          <TextInput />
          <Text>
            B. What did you teill (or currently telling) yourself? What
            Unhelpful thinking style did you use?
          </Text>
          <TextInput />
          <Button title="Next" navigation={navigation} location="Feelings" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
