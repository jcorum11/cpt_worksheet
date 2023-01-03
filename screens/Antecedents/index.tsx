import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';
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
          <TextInBlueBorder />
          <Btn
            title="Next"
            navigation={navigation}
            location="BehaviorsOrThoughts"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
