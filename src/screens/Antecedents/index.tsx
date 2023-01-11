import {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Btn} from 'components/Button';
import {TextInBlueBorder} from 'components/TextInBlueBorder';
import {useAppSelector} from 'libs/store/hooks';
import {setField} from 'libs/utils/services/antecedents-service';
import {AntecedentsProps} from 'libs/utils/types/navigation';
import {selectAntecent} from 'libs/store/medium-log-slice';

export const Antecendents = ({route, navigation}: AntecedentsProps) => {
  const [, setAntecedents] = useState('');
  const questionData = useAppSelector(selectAntecent);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{questionData.question}</Text>
          <TextInBlueBorder
            onChangeText={text => {
              setField('antecedents', text, setAntecedents);
            }}
          />
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
