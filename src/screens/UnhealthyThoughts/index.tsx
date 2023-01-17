import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {UnhealthyThoughtsProps} from 'libs/utils/types/navigation';
import {Btn} from 'components/Button';
import {TextInBlueBorder} from 'components/TextInBlueBorder';
import {useState} from 'react';
import {setField} from 'libs/utils/services/unhealthy-though-service';

export const UnhealthyThoughts = ({route, navigation}: UnhealthyThoughtsProps) => {
  const [, setUnhealthyThoughts] = useState('');
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Unhealthy thoughts</Text>
          <TextInBlueBorder
            onChangeText={text =>
              setField('unhealthyThoughts', text, setUnhealthyThoughts)
            }
          />
          <Btn title="Next" navigation={navigation} location="Antecedents" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
