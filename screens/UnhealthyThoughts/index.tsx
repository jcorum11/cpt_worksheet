import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {UnhealthyThoughtsProps} from '../../libs/utils/types/navigation';
import {Button} from '../../components/Button';

export const UnhealthyThoughts = ({
  route,
  navigation,
}: UnhealthyThoughtsProps) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Unhealthy thoughts</Text>
          <TextInput />
          <Button title="Next" navigation={navigation} location="Antecedents" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
