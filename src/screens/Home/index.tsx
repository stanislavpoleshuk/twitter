import React, { useCallback } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'core/navigation/navigators/HomeNavigator';
import ScreenNames from 'core/navigation/ScreenNames';
import { IPost } from 'api/post';
import { IUser } from 'api/user';

import HomeContainer from './components/HomeContainer';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, ScreenNames.HOME>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const navigateToPostScreen = useCallback(
    (post: IPost) => {
      // возможен переход на страницу поста, а так как её у нас нет, будет осуществлен переход
      // на страницу пользователя
      navigation.navigate(ScreenNames.USER, {
        user: post.user,
      });
    },
    [navigation],
  );

  const navigateToUserScreen = useCallback(
    (user: IUser) => {
      navigation.navigate(ScreenNames.USER, {
        user: user,
      });
    },
    [navigation],
  );

  return (
    <HomeContainer
      navigateToPostScreen={navigateToPostScreen}
      navigateToUserScreen={navigateToUserScreen}
    />
  );
};

export default Home;
