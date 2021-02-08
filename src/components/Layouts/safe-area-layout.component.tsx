import React from 'react';
import { View, ViewStyle } from 'react-native';

type Inset = 'top' | 'right' | 'bottom' | 'left';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  insets?: Inset;
};

export const SafeAreaLayout = ({ children, style }: Props): React.ReactElement => {
  return <View style={[style]}>{children}</View>;
};
