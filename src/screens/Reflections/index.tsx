import {SafeAreaView, ScrollView, Text} from 'react-native';
import {ReflectionsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';
import {useState} from 'react';
import {useAppSelector} from 'libs/store/hooks';
import {selectReflections} from 'libs/store/medium-log-slice';
import {setField} from 'libs/utils/services/reflections-service';

export const Reflections = ({route, navigation}: ReflectionsProps) => {
  const [, setBehaviors] = useState('');
  const [, setActions] = useState('');
  const [, setResults] = useState('');
  const [, setAffirmation] = useState('');
  const questions = useAppSelector(selectReflections);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{questions[0].question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('behaviors', text, setBehaviors)}
        />
        <Text>{questions[1].question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('actions', text, setActions)}
        />
        <Text>{questions[2].question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('results', text, setResults)}
        />
        <Text>{questions[3].question}</Text>
        <TextInBlueBorder
          onChangeText={text => setField('affirmation', text, setAffirmation)}
        />
        <Btn title="Next" navigation={navigation} location="Solutions" />
      </ScrollView>
    </SafeAreaView>
  );
};
