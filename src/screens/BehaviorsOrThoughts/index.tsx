import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {BehaviorsOrThoughtsProps} from 'libs/utils/types/navigation';
import {Btn} from 'components/Button';
import {TextInBlueBorder} from 'components/TextInBlueBorder';
import {useAppSelector} from 'libs/store/hooks';
import {useState} from 'react';
import {setField} from 'libs/utils/services/behaviors-or-thoughts-service';
import {selectBehaviorsOrThoughts} from 'libs/store/medium-log-slice';

export const BehaviorsOrThoughts = ({
  route,
  navigation,
}: BehaviorsOrThoughtsProps) => {
  const [, setDo] = useState('');
  const [, setTell] = useState('');
  const [doData, tell] = useAppSelector(selectBehaviorsOrThoughts);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{doData.question}</Text>
          <TextInBlueBorder
            onChangeText={text => setField('do', text, setDo)}
          />
          <Text>{tell.question}</Text>
          <TextInBlueBorder
            onChangeText={text => setField('tell', text, setTell)}
          />
          <Btn title="Next" navigation={navigation} location="Feelings" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
