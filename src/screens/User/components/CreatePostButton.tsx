import React, { useCallback } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppColors } from 'core/theme/AppColors';
import IonIcons from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
};

const CreatePostButton: React.FC<Props> = ({ onPress }) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <IonIcons name="add-outline" size={24} color={AppColors.BLACK} />
      </View>
    </Pressable>
  );
};

export default CreatePostButton;

const styles = StyleSheet.create({
  container: {},
});
