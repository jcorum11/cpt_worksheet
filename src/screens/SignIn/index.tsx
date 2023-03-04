import {Btn} from 'components/Button';
import {SignInProps} from 'libs/utils/types/navigation';
import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth'

export const SignIn = ({route, navigation}: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error signing in: ', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Email</Text>
          <TextInput onChangeText={(value) => setEmail(value)} autoCapitalize='none' />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput onChangeText={(value) => setPassword(value)} autoCapitalize='none' />
        </View>
        <Btn title="Next" onPress={handleSignIn} />
        <Btn title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </ScrollView>
    </SafeAreaView>
  );
};
