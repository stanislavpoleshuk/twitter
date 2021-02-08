import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'core/navigation/navigators/HomeNavigator';
import ScreenNames from 'core/navigation/ScreenNames';
import { IUser } from 'api/user';

import UserContainer from './components/UserContainer';

type UserScreenRouteProp = RouteProp<HomeStackParamList, ScreenNames.USER>;
type UserScreenNavigationProp = StackNavigationProp<HomeStackParamList, ScreenNames.USER>;

type Props = {
  route: UserScreenRouteProp;
  navigation: UserScreenNavigationProp;
};

const User: React.FC<Props> = ({ route }) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const _user = route.params.user;
    setUser(_user);
  }, [route, route.params]);

  return <UserContainer user={user} />;
};

export default User;
