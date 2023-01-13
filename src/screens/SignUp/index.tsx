import {Btn} from 'components/Button';
import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SignUp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Email</Text>
          <TextInput />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput />
        </View>
        <Btn title="Next" onPress={() => 'something'} />
      </ScrollView>
    </SafeAreaView>
  );
};
