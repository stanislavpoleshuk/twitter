import React from 'react';
import { Button } from 'react-native';

type Props = {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

export const ButtonPagination: React.FC<Props> = ({ label, disabled, onPress }) => {
  return <Button title={label} disabled={disabled} onPress={onPress} />;
};
