import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'core/hooks';
import { ICreateTweet } from 'core/store/user/types';
import { createUserPostByIdAction } from 'core/store/user/actions';

import Form from './Form';

type Props = {
  goBack: (hasUnsavedChanges?: boolean) => void;
};

const CreateTweetContainer: React.FC<Props> = ({ goBack }) => {
  const dispatch = useDispatch();

  const handleCreateTweet = useCallback(
    (tweet: ICreateTweet) => {
      dispatch(createUserPostByIdAction(tweet));
      goBack(false);
    },
    [dispatch, goBack],
  );

  return (
    <View style={styles.container}>
      <Form onSubmit={handleCreateTweet} />
    </View>
  );
};

export default CreateTweetContainer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});
