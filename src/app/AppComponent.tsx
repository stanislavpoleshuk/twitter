import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import AppNavigator from 'core/navigation/AppNavigator';
import StoreProvider from 'core/provider/StoreProvider';

const App = (): React.ReactElement => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <StatusBar />
        <AppNavigator />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default (props): React.ReactElement => {
  return (
    <>
      <App {...props} />
    </>
  );
};
