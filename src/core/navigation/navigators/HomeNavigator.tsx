import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ScreenNames from 'core/navigation/ScreenNames';
import localization from 'core/localization';
import { IUser } from 'api/user';
import Home from 'screens/Home';
import User from 'screens/User';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.USER]: {
    user: IUser;
  };
  [ScreenNames.CREATE_TWEET]: undefined;
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
    <Stack.Screen
      name={ScreenNames.USER}
      options={{
        ...baseOptions,
        title: localization.screens.user,
      }}
      component={User}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
