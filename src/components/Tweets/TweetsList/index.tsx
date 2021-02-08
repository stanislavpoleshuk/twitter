import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { IPost } from 'api/post';
import Loader from 'components/Loader';
import { IUser } from 'api/user';

import TweetItem from './components/TweetItem';

type Props = {
  data: Array<IPost>;
  loading: boolean;
  fetchMore: () => void;
  onPressItem?: (post: IPost) => void;
  onPressUser?: (user: IUser) => void;
  onDelete?: (item: IPost) => void;
  headerComponent?: React.ReactElement;
};

const TweetsList: React.FC<Props> = ({
  data,
  loading,
  fetchMore,
  onPressItem,
  onPressUser,
  onDelete,
  headerComponent,
}) => {
  const keyExtractor = useCallback((item: IPost) => `${item.id}`, []);

  const listFooterComponent = useMemo(() => loading && <Loader />, [loading]);

  const renderItem = useCallback<ListRenderItem<IPost>>(
    ({ item }) => {
      return (
        <TweetItem
          item={item}
          onPress={onPressItem}
          onPressUser={onPressUser}
          onDelete={onDelete}
        />
      );
    },
    [onDelete, onPressItem, onPressUser],
  );

  const handleFetchMore = useCallback(() => {
    fetchMore();
  }, [fetchMore]);

  return (
    <FlatList<IPost>
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={headerComponent}
      ListFooterComponent={listFooterComponent}
      onEndReachedThreshold={1}
      onEndReached={handleFetchMore}
      scrollEventThrottle={16}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default TweetsList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 60,
  },
});
