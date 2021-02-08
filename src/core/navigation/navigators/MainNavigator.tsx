import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ScreenNames from 'core/navigation/ScreenNames';

import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.MAIN_ROUTE}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ScreenNames.HOME_STACK} component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
