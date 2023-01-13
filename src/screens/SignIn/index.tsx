import {Btn} from 'components/Button';
import {SignInProps} from 'libs/utils/types/navigation';
import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SignIn = ({route, navigation}: SignInProps) => {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
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
        <Btn title="Sign Up" navigation={navigation} location="SignUp" />
      </ScrollView>
    </SafeAreaView>
  );
};
