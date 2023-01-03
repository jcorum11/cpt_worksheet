import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {UnhealthyThoughtsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const UnhealthyThoughts = ({
  route,
  navigation,
}: UnhealthyThoughtsProps) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Unhealthy thoughts</Text>
          <TextInBlueBorder />
          <Btn title="Next" navigation={navigation} location="Antecedents" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
