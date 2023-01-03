import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch} from '../../libs/store/hooks';
import {saveSituationAnswer} from '../mediumLogSlice';
import {useState} from 'react';
import {result, setField} from '../../libs/utils/situation-service';
import {SituationProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';

export const Situation = ({route, navigation}: SituationProps) => {
  const dispatch = useAppDispatch();
  const [, setWho] = useState('');
  const [, setWhat] = useState('');
  const [, setWhere] = useState('');
  const [, setWhen] = useState('');
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View>
            <Text>
              Think of a recent or current time when you felt a sudden change in
              emotions.
            </Text>
          </View>
          <View>
            <Text>Who were/are you with?</Text>
            <TextInBlueBorder
              onChangeText={text => setField('who', text, setWho)}
            />
          </View>
          <View>
            <Text>What were/are you doing?</Text>
            <TextInBlueBorder
              onChangeText={text => setField('what', text, setWhat)}
            />
          </View>
          <View>
            <Text>Where were/are you?</Text>
            <TextInBlueBorder
              onChangeText={text => setField('where', text, setWhere)}
            />
          </View>
          <View>
            <Text>When did this happen?</Text>
            <TextInBlueBorder
              onChangeText={text => setField('when', text, setWhen)}
            />
          </View>
        </View>
        <View>
          <Btn
            title="Next"
            navigation={navigation}
            location="UnhealthyThoughts"
            onPress={() => dispatch(saveSituationAnswer(result))}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
