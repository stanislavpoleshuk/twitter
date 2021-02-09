import React, { useCallback, useMemo, useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import localization from 'core/localization';
import { AppColors } from 'core/theme/AppColors';
import { ICreateTweet } from 'core/store/user/types';

type Props = {
  onSubmit: (tweet: ICreateTweet) => void;
};

const Form: React.FC<Props> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const isValid = useMemo(() => message.trim().length > 0, [message]);

  const handleSubmit = useCallback(() => {
    if (!isValid) {
      const { title, messageEmpty } = localization.tweet.error;
      return Alert.alert(title, messageEmpty);
    }
    const tweet: ICreateTweet = {
      message,
    };

    onSubmit(tweet);
  }, [isValid, message, onSubmit]);

  const handleChangeMessage = useCallback((text: string) => {
    setMessage(text);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{localization.tweet.messageLabel}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={handleChangeMessage}
          numberOfLines={6}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button disabled={!isValid} title={localization.tweet.submit} onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    marginTop: 10,
    backgroundColor: AppColors.LIGHT_BLUE,
    borderRadius: 8,
    borderColor: AppColors.BORDER_COLOR,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: StyleSheet.flatten([
    {
      alignContent: 'flex-start',
      textAlignVertical: 'top',
    },
    Platform.select({
      ios: {
        minHeight: 160,
        maxHeight: 22,
      },
    }),
  ]),
  buttonContainer: { marginTop: 10 },
});
