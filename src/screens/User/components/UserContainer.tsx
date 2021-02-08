import React, { useCallback, useEffect, useMemo } from 'react';
import { IUser } from 'api/user';
import { useDispatch, useSelector } from 'core/hooks';
import { IPost, RequestPost } from 'api/post';
import { TweetsList } from 'components/Tweets';
import {
  deleteUserPostByIdAction,
  fetchUserNextPostPage,
  fetchUserPost,
} from 'core/store/user/actions';
import { userPostsSelector } from 'core/store/user/selectors';

import UserInfo from './UserInfo';

type Props = {
  user: IUser | undefined;
};

const UserContainer: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch();
  const data = useSelector(userPostsSelector);
  const loading = useSelector((state) => state.user.loading);

  const handleFetchMore = useCallback(() => {
    !loading && dispatch(fetchUserNextPostPage({}));
  }, [dispatch, loading]);

  const init = useCallback(() => {
    const request: RequestPost = {};
    dispatch(fetchUserPost(request));
  }, [dispatch]);

  const handleDelete = useCallback(
    (item: IPost) => {
      dispatch(deleteUserPostByIdAction(item.id));
    },
    [dispatch],
  );

  const ListHeader = useMemo(() => user && <UserInfo user={user} />, [user]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <TweetsList
      data={data}
      loading={loading}
      fetchMore={handleFetchMore}
      headerComponent={ListHeader}
      onDelete={handleDelete}
    />
  );
};

export default UserContainer;
