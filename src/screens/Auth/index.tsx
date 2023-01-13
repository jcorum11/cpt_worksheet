import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignIn from 'screens/SignUp';

export const Auth = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <SignIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
