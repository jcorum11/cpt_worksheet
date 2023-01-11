import {SafeAreaView, ScrollView, Text} from 'react-native';
import {FeelingsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';
import {setField} from 'libs/utils/services/feelings-service';
import {useState} from 'react';

export const Feelings = ({route, navigation}: FeelingsProps) => {
  const [, setFeelings] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>What were/are you feeling?</Text>
        <TextInBlueBorder
          onChangeText={text => setField('feelings', text, setFeelings)}
        />
        <Btn title="Next" navigation={navigation} location="Consequences" />
      </ScrollView>
    </SafeAreaView>
  );
};
