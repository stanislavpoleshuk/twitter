import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IUser } from 'api/user';
import { AppColors } from 'core/theme/AppColors';
import FastImage, { Source } from 'react-native-fast-image';

type Props = {
  user: IUser;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  const source = useMemo<Source>(() => {
    const { avatarUrl } = user;
    return {
      uri: avatarUrl,
    };
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage source={source} style={styles.image} />
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.userName}>@{user.userName}</Text>
    </View>
  );
};

export default React.memo(UserInfo);

const IMAGE_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  name: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  userName: {
    textAlign: 'center',
    color: AppColors.BOULDER,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
});
