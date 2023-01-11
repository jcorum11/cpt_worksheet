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

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Situation">
        <Stack.Screen name="Situation" component={Situation} />
        <Stack.Screen name="UnhealthyThoughts" component={UnhealthyThoughts} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
