import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {ReflectionsProps} from '../../types/navigation';
import {Button} from '../../components/utils/Button';

export const Reflections = ({route, navigation}: ReflectionsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>What do you notice now about your behaviors?</Text>
        <TextInput />
        <Text>
          Did any of your actions result in good feelings like pleasure or
          relief, at least in the short-term?
        </Text>
        <TextInput />
        <Text>
          If you carry on acting in those ways, what do you think the long-term
          result will be?
        </Text>
        <TextInput />
        <Text>
          What can you tell yourself the next time you start to feel and do
          these behaviors?
        </Text>
        <TextInput />
        <Button title="Next" navigation={navigation} location="Solutions" />
      </ScrollView>
    </SafeAreaView>
  );
};
