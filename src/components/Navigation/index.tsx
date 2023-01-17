import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../libs/utils/types/navigation';
import {Antecendents} from '../../screens/Antecedents';
import {BehaviorsOrThoughts} from '../../screens/BehaviorsOrThoughts';
import {Consequences} from '../../screens/Consequeces';
import {Feelings} from '../../screens/Feelings';
import {Logical} from '../../screens/Logical';
import {Reflections} from '../../screens/Reflections';
import {Situation} from '../../screens/Situation';
import {Solutions} from '../../screens/Solutions';
import {UnhealthyThoughts} from '../../screens/UnhealthyThoughts';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {SignIn} from 'screens/SignIn';
import {SignUp} from 'screens/SignUp';
import {useAppDispatch} from 'libs/store/hooks';
import {setUid} from 'libs/store/user-slice';
import {fetchLegacyLog} from 'libs/store/medium-log-slice';
import {Logs} from 'screens/Logs';
import {Btn} from 'components/Button';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const dispatch = useAppDispatch();
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (userState?.uid !== undefined) {
        dispatch(setUid(userState.uid));
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, [dispatch, initializing]);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Logs"
              component={Logs}
              options={({navigation}) => ({
                headerLeft: () => (
                  <Btn
                    title="Add"
                    navigation={navigation}
                    location="Situation"
                  />
                ),
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
