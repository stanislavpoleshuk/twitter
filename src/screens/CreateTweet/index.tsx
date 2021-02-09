import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenNames from 'core/navigation/ScreenNames';
import { EditorStackParamList } from 'core/navigation/navigators/EditorNavigator';
import CloseModalButton from 'core/navigation/components/CloseModalButton';
import { Alert } from 'react-native';
import localization from 'core/localization';

import CreateTweetContainer from './components/CreateTweetContainer';

type ScreenRouteProp = RouteProp<EditorStackParamList, ScreenNames.CREATE_TWEET>;
type ScreenNavigationProp = StackNavigationProp<EditorStackParamList, ScreenNames.CREATE_TWEET>;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const CreateTweet: React.FC<Props> = ({ navigation }) => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);

  const handleGoBack = useCallback(
    (hasUnsaved?: boolean) => {
      if (hasUnsaved !== undefined) {
        setHasUnsavedChanges(hasUnsaved);
      }
      setTimeout(() => {
        navigation.goBack();
      }, 200);
    },
    [navigation],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CloseModalButton onPress={handleGoBack} />,
    });
  }, [handleGoBack, navigation]);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          return;
        }
        e.preventDefault();

        const { title, message, cancel, destructive } = localization.tweet.alert;

        Alert.alert(title, message, [
          { text: cancel, style: 'cancel', onPress: () => {} },
          {
            text: destructive,
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]);
      }),
    [hasUnsavedChanges, navigation],
  );

  return <CreateTweetContainer goBack={handleGoBack} />;
};

export default CreateTweet;
