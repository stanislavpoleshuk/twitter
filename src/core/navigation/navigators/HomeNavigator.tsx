import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from 'screens/Home';
import ScreenNames from 'core/navigation/ScreenNames';
import localization from 'core/localization';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  [ScreenNames.HOME]: undefined;
};

const baseOptions = {
  headerLargeTitle: true,
};
const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.HOME}
      options={{
        ...baseOptions,
        title: localization.screens.home,
      }}
      component={Home}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
