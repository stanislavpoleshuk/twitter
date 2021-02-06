import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

const initialTabRoute: string = 'Main';

const MainNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={initialTabRoute}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
