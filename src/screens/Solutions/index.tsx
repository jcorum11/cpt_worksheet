import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {SolutionsProps} from '../../libs/utils/types/navigation';
import {Btn} from '../../components/Button';
import {TextInBlueBorder} from '../../components/TextInBlueBorder';
import {useState} from 'react';
import {setField} from 'libs/utils/services/solutions-service';
import {post} from 'libs/utils/services/solutions-service';

export const Solutions = ({route, navigation}: SolutionsProps) => {
  const [, setSolutions] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInBlueBorder
          onChangeText={text => setField('solutions', text, setSolutions)}
        />
        <Btn
          title="Submit"
          navigation={navigation}
          location="Logs"
          onPress={() => post()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
