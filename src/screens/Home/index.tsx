import React, { useCallback, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import { HomeStackParamList } from 'core/navigation/navigators/HomeNavigator';
import ScreenNames from 'core/navigation/ScreenNames';
import { RequestPost } from 'api/post';
import { useDispatch } from 'core/hooks';
import { fetchHomePost } from 'core/store/home/actions';

type HomeScreenRouteProp = RouteProp<HomeStackParamList, ScreenNames.HOME>;
type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, ScreenNames.HOME>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const init = useCallback(() => {
    const request: RequestPost = {
      pageNumber: 1,
    };
    dispatch(fetchHomePost(request));
  }, [dispatch]);

  useEffect(() => {
    init();
  }, [init]);

  return <View />;
};

export default Home;
