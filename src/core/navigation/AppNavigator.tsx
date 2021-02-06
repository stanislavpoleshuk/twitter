import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Colors } from 'core/theme/colors.theme';

import MainNavigator from './navigators/MainNavigator';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.lightBar,
  },
};

export const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
