import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ScreenNames from 'core/navigation/ScreenNames';
import localization from 'core/localization';
import CreateTweet from 'screens/CreateTweet';

const Stack = createNativeStackNavigator();

export type EditorStackParamList = {
  [ScreenNames.CREATE_TWEET]: undefined;
};

const baseOptions = {
  headerLargeTitle: true,
};
const EditorNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.CREATE_TWEET}
      options={{
        ...baseOptions,
        title: localization.screens.createTweet,
      }}
      component={CreateTweet}
    />
  </Stack.Navigator>
);

export default EditorNavigator;
