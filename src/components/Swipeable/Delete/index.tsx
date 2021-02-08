import React, { ReactNode, useCallback, useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { AppColors } from 'core/theme/AppColors';

type Props = {
  children: ReactNode;
  onPress: () => void;
};

const SwipeableDelete: React.FC<Props> = ({ children, onPress }) => {
  const rowRef = useRef<Swipeable>(null);

  const handleClose = useCallback(() => {
    rowRef.current?.close();
  }, []);

  const pressHandler = useCallback(() => {
    handleClose();
    onPress();
  }, [handleClose, onPress]);

  const renderAction = useCallback(
    (x: number, progress: Animated.AnimatedInterpolation) => {
      const trans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [x, 0],
      });
      return (
        <Animated.View
          style={StyleSheet.flatten([
            styles.action,
            {
              transform: [{ translateX: trans }],
            },
          ])}
        >
          <Pressable onPress={pressHandler}>
            <RectButton style={[styles.rightAction]}>
              <IonIcons name="trash-outline" size={30} color={AppColors.WHITE} />
            </RectButton>
          </Pressable>
        </Animated.View>
      );
    },
    [pressHandler],
  );

  const renderRightActions = useCallback(
    (progress: Animated.AnimatedInterpolation) => (
      <View style={styles.actionsContainer}>{renderAction(100, progress)}</View>
    ),
    [renderAction],
  );

  return (
    <Swipeable
      ref={rowRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};
export default SwipeableDelete;

const styles = StyleSheet.create({
  actionsContainer: { width: 100, marginBottom: 10 },
  action: {
    flex: 1,
    backgroundColor: AppColors.DANGER,
    marginTop: 6,
    marginBottom: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 6,
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    height: '100%',
  },
});
