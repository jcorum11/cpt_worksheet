import {SafeAreaView, ScrollView, Text} from 'react-native';
import {ConsequencesProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';
import {useAppSelector} from 'libs/store/hooks';
import {selectConsequences} from 'libs/store/medium-log-slice';
import {setField} from 'libs/utils/services/consequences-service';
import {useState} from 'react';

export const Consequences = ({route, navigation}: ConsequencesProps) => {
  const questions = useAppSelector(selectConsequences);
  const [, setIntended] = useState('');
  const [, setUnintended] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          What were the intended and unintended results of responding in that
          way?
        </Text>
        <Text>{questions[0].question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('intended', text, setIntended)}
        />
        <Text>{questions[1].question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('unintended', text, setUnintended)}
        />
        <Btn title="Next" navigation={navigation} location="Logical" />
      </ScrollView>
    </SafeAreaView>
  );
};
