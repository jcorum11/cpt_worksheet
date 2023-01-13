import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { useState } from 'react';
import { setField } from 'libs/utils/services/situation-service';
import { SituationProps } from 'libs/utils/types/navigation';
import { Btn } from 'components/Button';
import { TextInBlueBorder } from 'components/TextInBlueBorder';
import { useAppSelector } from 'libs/store/hooks';
import { selectSituation } from 'libs/store/medium-log-slice';
import database from '@react-native-firebase/database';

export const Situation = ({ route, navigation }: SituationProps) => {
  const [, setWho] = useState('');
  const [, setWhat] = useState('');
  const [, setWhere] = useState('');
  const [, setWhen] = useState('');
  const [who, what, where, when] = useAppSelector(selectSituation);
  const post = () => {
    const reference = database().ref('/users').push();
    reference.set({ age: 32 }).then(() => console.log('Data set.'));
  };
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
            <Text>{who.question}</Text>
            <TextInBlueBorder
              onChangeText={text => setField('who', text, setWho)}
            />
          </View>
          <View>
            <Text>{what.question}</Text>
            <TextInBlueBorder
              onChangeText={text => setField('what', text, setWhat)}
            />
          </View>
          <View>
            <Text>{where.question}</Text>
            <TextInBlueBorder
              onChangeText={text => setField('where', text, setWhere)}
            />
          </View>
          <View>
            <Text>{when.question}</Text>
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
            onPress={() => post()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
