import React, { useMemo } from 'react';
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from 'react-native';
import { AppColors } from 'core/theme/AppColors';

interface IProps extends ActivityIndicatorProps {
  loading?: boolean;
  color?: string;
}

const Loader: React.FC<IProps> = ({ loading = true, color, ...rest }) => {
  const useColor = useMemo(() => {
    return color ? color : AppColors.BLUE;
  }, [color]);

  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator {...rest} color={useColor} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
