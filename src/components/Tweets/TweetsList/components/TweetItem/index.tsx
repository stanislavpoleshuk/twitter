import React, { useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IPost } from 'api/post';
import { AppColors } from 'core/theme/AppColors';
import moment from 'moment';
import localization from 'core/localization';
import { IUser } from 'api/user';
import SwipeableDelete from 'components/Swipeable/Delete';

import TweetHeader from './Header';

type Props = {
  item: IPost;
  onPress?: (item: IPost) => void;
  onPressUser?: (user: IUser) => void;
  onDelete?: (item: IPost) => void;
};

const TweetItem: React.FC<Props> = ({ item, onPress, onPressUser, onDelete }) => {
  const handlePress = useCallback(() => {
    onPress && onPress(item);
  }, [item, onPress]);

  const handleDelete = useCallback(() => {
    onDelete && onDelete(item);
  }, [item, onDelete]);

  const template = useMemo(() => {
    return (
      <Pressable onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TweetHeader user={item.user} onPressUser={onPressUser} />
            <Text>{item.message}</Text>
            <Text style={styles.date}>{`${localization.common.date}: ${moment(item.date).format(
              'D.MM.YYYY hh:mm',
            )}`}</Text>
          </View>
        </View>
      </Pressable>
    );
  }, [handlePress, item.date, item.message, item.user, onPressUser]);

  return useMemo(() => {
    if (onDelete) {
      return <SwipeableDelete onPress={handleDelete}>{template}</SwipeableDelete>;
    }
    return template;
  }, [handleDelete, onDelete, template]);
};

export default TweetItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: AppColors.BORDER_COLOR,
    marginBottom: 10,
    paddingHorizontal: 25,
  },
  innerContainer: {
    paddingVertical: 10,
  },
  date: {
    fontStyle: 'italic',
    marginTop: 5,
    color: AppColors.BOULDER,
  },
});
