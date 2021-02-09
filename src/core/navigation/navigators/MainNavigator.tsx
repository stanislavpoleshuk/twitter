import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ScreenNames from 'core/navigation/ScreenNames';

import HomeNavigator from './HomeNavigator';
import EditorNavigator from './EditorNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.MAIN_ROUTE}
      screenOptions={{
        headerShown: false,
        stackPresentation: 'fullScreenModal',
      }}
    >
      <Stack.Screen name={ScreenNames.HOME_STACK} component={HomeNavigator} />
      <Stack.Screen name={ScreenNames.CREATE_TWEET} component={EditorNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
