import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AppColors } from 'core/theme/AppColors';

import MainNavigator from './navigators/MainNavigator';
import { navigationRef } from './RootNavigation';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.LIGHT,
  },
};

export const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer ref={navigationRef} theme={navigatorTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
