import React, { useCallback, useEffect } from 'react';
import { TweetsList } from 'components/Tweets';
import { useDispatch, useSelector } from 'core/hooks';
import { homePostsSelector } from 'core/store/home/selectors';
import { IPost, RequestPost } from 'api/post';
import { fetchHomeNextPostPage, fetchHomePost } from 'core/store/home/actions';
import { IUser } from 'api/user';

type Props = {
  navigateToPostScreen: (post: IPost) => void;
  navigateToUserScreen: (user: IUser) => void;
};

const HomeContainer: React.FC<Props> = ({ navigateToPostScreen, navigateToUserScreen }) => {
  const dispatch = useDispatch();
  const data = useSelector(homePostsSelector);
  const loading = useSelector((state) => state.home.loading);

  const handleFetchMore = useCallback(() => {
    !loading && dispatch(fetchHomeNextPostPage({}));
  }, [dispatch, loading]);

  const init = useCallback(() => {
    const request: RequestPost = {};
    dispatch(fetchHomePost(request));
  }, [dispatch]);

  const handlePressItem = useCallback(
    (post: IPost) => {
      navigateToPostScreen(post);
    },
    [navigateToPostScreen],
  );

  const handlePressUser = useCallback(
    (user: IUser) => {
      navigateToUserScreen(user);
    },
    [navigateToUserScreen],
  );

  useEffect(() => {
    init();
  }, [init]);

  return (
    <TweetsList
      data={data}
      loading={loading}
      fetchMore={handleFetchMore}
      onPressItem={handlePressItem}
      onPressUser={handlePressUser}
    />
  );
};

export default HomeContainer;
