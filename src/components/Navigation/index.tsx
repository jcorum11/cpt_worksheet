import React, { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../libs/utils/types/navigation';
import { Antecendents } from '../../screens/Antecedents';
import { BehaviorsOrThoughts } from '../../screens/BehaviorsOrThoughts';
import { Consequences } from '../../screens/Consequeces';
import { Feelings } from '../../screens/Feelings';
import { Logical } from '../../screens/Logical';
import { Reflections } from '../../screens/Reflections';
import { Situation } from '../../screens/Situation';
import { Solutions } from '../../screens/Solutions';
import { UnhealthyThoughts } from '../../screens/UnhealthyThoughts';
import auth from '@react-native-firebase/auth';
import { SignIn } from 'screens/SignIn';
import { SignUp } from 'screens/SignUp';
import { Logs } from 'screens/Logs';
import { Btn } from 'components/Button';
import { useColorScheme } from 'react-native';
import { CustomTheme } from 'libs/utils/types/themes';
import { useAppDispatch } from 'libs/store/hooks';
import { setUid } from 'libs/store/user-slice';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  // Set an initializing state whilst Firebase connects
  const dispatch = useAppDispatch()

  const scheme = useColorScheme();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    dispatch(setUid(user.uid))
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const customTheme: CustomTheme = {
    dark: true,
    colors: {
      notification: '#755B69', //old lavender
      primary: '#96C5B0', //cambridge blue
      background: '#ADF1D2', //magic mint
      border: '#070707', // rich black
      text: 'white',
      card: '#553555', //english violet
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Logs"
              component={Logs}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <Btn
                    title="New"
                    navigation={navigation}
                    location="Situation"
                  />
                ),
                headerRight: () => <Btn title='Log Out' onPress={() => auth().signOut().then(() => console.log('User signed out!'))} />
              })}
            />
            <Stack.Screen name="Situation" component={Situation} />
            <Stack.Screen
              name="UnhealthyThoughts"
              component={UnhealthyThoughts}
            />
            <Stack.Screen name="Antecedents" component={Antecendents} />
            <Stack.Screen
              name="BehaviorsOrThoughts"
              component={BehaviorsOrThoughts}
            />
            <Stack.Screen name="Feelings" component={Feelings} />
            <Stack.Screen name="Consequences" component={Consequences} />
            <Stack.Screen name="Logical" component={Logical} />
            <Stack.Screen name="Reflections" component={Reflections} />
            <Stack.Screen name="Solutions" component={Solutions} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} /> 
            <Stack.Screen name="SignUp" component={SignUp} /> 
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
