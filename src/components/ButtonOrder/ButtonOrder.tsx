import React, { useEffect, useMemo, useRef } from 'react';
import { Colors } from '@app/styles/colors';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  View,
  Animated,
} from 'react-native';
import { styles } from './ButtonOrder.styles';
import { Paralelogram } from '../Paralelogram/Paralelogram';
import {
  AUTO_ACCEPT_DECLINE_TIMER,
  SCREEN_WIDTH,
} from '@app/utilities/constants';

export enum ButtonOrderType {
  accept = 'Accept',
  decline = 'Decline',
  acceptNow = 'Accept Now',
  declineNow = 'Decline Now',
}

const PARALELOGRAM_WIDTH = 16;
const PARALELOGRAM_HEIGHT = 8;

const PROGRESS_BAR_WIDTH = SCREEN_WIDTH - 54;

type Props = {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: ButtonOrderType;
  onPress: () => void;
};

export const ButtonOrder = ({
  disabled,
  style,
  textStyle,
  type = ButtonOrderType.accept,
  onPress,
}: Props) => {
  const widthAnimation = useRef(new Animated.Value(PROGRESS_BAR_WIDTH)).current;
  const numberOfParalelograms = Math.floor(SCREEN_WIDTH / PARALELOGRAM_WIDTH);

  const animateElement = () => {
    Animated.timing(widthAnimation, {
      toValue: 0,
      duration: AUTO_ACCEPT_DECLINE_TIMER,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    widthAnimation.addListener(value => {
      if (value.value === 0) {
        switch (type) {
          case ButtonOrderType.accept:
            onPress();
            break;
          case ButtonOrderType.decline:
            onPress();
            break;
          default:
            break;
        }
        widthAnimation.stopAnimation();
      }
    });
    animateElement();
  });

  const backgroundColor = useMemo(() => {
    switch (type) {
      case ButtonOrderType.accept:
        return Colors.green1;
      case ButtonOrderType.decline:
        return Colors.red1;
      case ButtonOrderType.acceptNow:
      case ButtonOrderType.declineNow:
        return Colors.black1;
    }
  }, [type]);

  const paralelogramColor = (index: number) => {
    const even = index % 2 === 0;
    switch (type) {
      case ButtonOrderType.accept:
        return even ? Colors.green1 : Colors.green4;
      case ButtonOrderType.decline:
        return even ? Colors.red1 : Colors.red3;
      default:
        return Colors.green1;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        style,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text style={[styles.textTitle, textStyle]}>{type}</Text>
      {(type === ButtonOrderType.accept ||
        type === ButtonOrderType.decline) && (
        <View style={[styles.containerLoader, { height: PARALELOGRAM_HEIGHT }]}>
          {[...Array(numberOfParalelograms).keys()]
            .map(i => i)
            .map(index => {
              return (
                <Paralelogram
                  backgroundColor={paralelogramColor(index)}
                  width={PARALELOGRAM_WIDTH}
                  height={PARALELOGRAM_HEIGHT}
                />
              );
            })}
          <Animated.View style={[styles.progress, { width: widthAnimation }]} />
        </View>
      )}
    </TouchableOpacity>
  );
};
