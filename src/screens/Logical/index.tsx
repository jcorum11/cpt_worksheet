import {SafeAreaView, ScrollView, Text} from 'react-native';
import {LogicalProps} from 'libs/utils/types/navigation';
import {Btn} from 'components/Button';
import {TextInBlueBorder} from 'components/TextInBlueBorder';
import {useState} from 'react';
import {setField} from 'libs/utils/services/logical-service';
import {useAppSelector} from 'libs/store/hooks';
import {selectLogical} from 'libs/store/medium-log-slice';

export const Logical = ({route, navigation}: LogicalProps) => {
  const [, setLogical] = useState('');
  const question = useAppSelector(selectLogical);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{question.question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('logical', text, setLogical)}
        />
        <Btn title="Next" navigation={navigation} location="Reflections" />
      </ScrollView>
    </SafeAreaView>
  );
};
