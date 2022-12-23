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
import {Button} from '../../components/Button';

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
            <TextInput />
            {/* onChangeText={text => setField('who', text, setWho)}></TextInput> */}
          </View>
          <View>
            <Text>What were/are you doing?</Text>
            <TextInput />
            {/* onChangeText={text => */}
            {/* setField('what', text, setWhat) */}
            {/* }></TextInput> */}
          </View>
          <View>
            <Text>Where were/are you?</Text>
            <TextInput />
            {/* onChangeText={text => */}
            {/* setField('where', text, setWhere) */}
            {/* }></TextInput> */}
          </View>
          <View>
            <Text>When did this happen?</Text>
            <TextInput />
            {/* onChangeText={text => */}
            {/* setField('when', text, setWhen) */}
            {/* }></TextInput> */}
          </View>
        </View>
        <View>
          {/* <Button */}
          {/*   title="Next" */}
          {/*   navigation={navigation} */}
          {/*   location="UnhealthyThoughts" */}
          {/*   onPress={() => dispatch(saveSituationAnswer(result))} */}
          {/* /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
