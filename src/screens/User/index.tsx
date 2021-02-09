import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'core/navigation/navigators/HomeNavigator';
import ScreenNames from 'core/navigation/ScreenNames';
import { IUser } from 'api/user';

import UserContainer from './components/UserContainer';
import CreatePostButton from './components/CreatePostButton';

type UserScreenRouteProp = RouteProp<HomeStackParamList, ScreenNames.USER>;
type UserScreenNavigationProp = StackNavigationProp<HomeStackParamList, ScreenNames.USER>;

type Props = {
  route: UserScreenRouteProp;
  navigation: UserScreenNavigationProp;
};

const User: React.FC<Props> = ({ route, navigation }) => {
  const [user, setUser] = useState<IUser>();

  const navigateToCreateTweet = useCallback(() => {
    console.log('@navigation');
    navigation.navigate(ScreenNames.CREATE_TWEET);
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <CreatePostButton onPress={navigateToCreateTweet} />,
    });
  }, [navigateToCreateTweet, navigation]);

  useEffect(() => {
    const _user = route.params.user;
    setUser(_user);
  }, [route, route.params]);

  return <UserContainer user={user} />;
};

export default User;
