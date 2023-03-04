import { Btn } from 'components/Button';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth'

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Email</Text>
          <TextInput onChangeText={(value) => setEmail(value)} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput onChangeText={(value) => setPassword(value)} />
        </View>
        <Btn title="Next" onPress={() => auth().createUserWithEmailAndPassword(email, password)} />
      </ScrollView>
    </SafeAreaView>
  );
};
