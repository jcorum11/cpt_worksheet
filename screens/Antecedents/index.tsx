import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AntecedentsProps} from '../../libs/utils/types/navigation';

export const Antecendents = ({route, navigation}: AntecedentsProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>
            What was happening just before you noticed a change in how you were
            feeling or acting?
          </Text>
          <TextInput />
          <Button
            title="Next"
            onPress={() => navigation.navigate('BehaviorsOrThoughts')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
