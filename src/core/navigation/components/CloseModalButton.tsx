import React, { useCallback } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppColors } from 'core/theme/AppColors';
import IonIcons from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
};

const CloseModalButton: React.FC<Props> = ({ onPress }) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <IonIcons name="close-outline" size={30} color={AppColors.BLACK} />
      </View>
    </Pressable>
  );
};

export default CloseModalButton;

const styles = StyleSheet.create({
  container: {},
});
