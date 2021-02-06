import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'core/theme/colors.theme';

type Inset = 'top' | 'right' | 'bottom' | 'left';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  insets?: Inset;
};

export const SafeAreaLayout = ({ children, insets, style }: Props): React.ReactElement => {
  return <View style={[style]}>{children}</View>;
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: Colors.light,
  },
  dark: {
    backgroundColor: Colors.dark,
  },
});
