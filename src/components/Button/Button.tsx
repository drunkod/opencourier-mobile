import React, { useMemo } from 'react';
import { Colors } from '@app/styles/colors';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styles } from './Button.styles';

export enum ButtonType {
  red,
  green,
  black,
  white,
  yellow,
}

type Props = {
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: ButtonType;
  onPress: () => void;
};

export const Button = ({
  title,
  disabled,
  style,
  textStyle,
  type = ButtonType.black,
  onPress,
}: Props) => {
  const backgroundColor = useMemo(() => {
    switch (type) {
      case ButtonType.black:
      case ButtonType.green:
      case ButtonType.red:
      case ButtonType.yellow:
        return Colors.black1;
      case ButtonType.white:
        return Colors.white;
    }
  }, [type]);

  const textColor = useMemo(() => {
    switch (type) {
      case ButtonType.black:
      case ButtonType.green:
      case ButtonType.red:
        return Colors.white;
      case ButtonType.white:
      case ButtonType.yellow:
        return Colors.black1;
    }
  }, [type]);

  const borderColor = useMemo(() => {
    switch (type) {
      case ButtonType.black:
      case ButtonType.green:
      case ButtonType.red:
      case ButtonType.white:
      case ButtonType.yellow:
        return Colors.black1;
    }
  }, [type]);

  const borderWidth = useMemo(() => {
    switch (type) {
      case ButtonType.black:
        return 0;
      case ButtonType.green:
      case ButtonType.red:
      case ButtonType.white:
      case ButtonType.yellow:
        return 2;
    }
  }, [type]);

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
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      <Text style={[styles.textTitle, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
