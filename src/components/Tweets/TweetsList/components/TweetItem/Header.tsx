import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IUser } from 'api/user';
import { AppColors } from 'core/theme/AppColors';

type Props = {
  user: IUser;
  onPressUser?: (user: IUser) => void;
};

const TweetHeader: React.FC<Props> = ({ user, onPressUser }) => {
  const handleUserPress = useCallback(() => {
    onPressUser && onPressUser(user);
  }, [onPressUser, user]);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleUserPress}>
        <Text>
          {user.name} <Text style={styles.username}>@{user.userName}</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default TweetHeader;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  username: {
    color: AppColors.BOULDER,
  },
});
