import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {UnhealthyThoughtsProps} from 'libs/utils/types/navigation';
import {Btn} from 'components/Button';
import {TextInBlueBorder} from 'components/TextInBlueBorder';
import {useAppDispatch} from 'libs/store/hooks';
import {useState} from 'react';
import {setField} from 'libs/utils/services/unhealthy-though-service';
import {saveUnhealthyThoughtsAnswer} from 'libs/store/medium-log-slice';

export const UnhealthyThoughts = ({
  route,
  navigation,
}: UnhealthyThoughtsProps) => {
  const dispatch = useAppDispatch();
  const [, setUnhealthyThoughts] = useState('');
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Unhealthy thoughts</Text>
          <TextInBlueBorder
            onChangeText={text =>
              setField('unhealthyThoughts', text, setUnhealthyThoughts)
            }
          />
          <Btn title="Next" navigation={navigation} location="Antecedents" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
