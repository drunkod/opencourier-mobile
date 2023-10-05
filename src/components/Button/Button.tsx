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
  transparent,
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
        return Colors.black;
      case ButtonType.green:
        return Colors.black;
      case ButtonType.red:
        return Colors.black;
      case ButtonType.transparent:
        return Colors.black;
      case ButtonType.yellow:
        return Colors.black;
    }
  }, [type]);

  const textColor = useMemo(() => {
    switch (type) {
      case ButtonType.black:
        return Colors.white;
      case ButtonType.green:
        return Colors.white;
      case ButtonType.red:
        return Colors.white;
      case ButtonType.transparent:
        return Colors.black;
      case ButtonType.yellow:
        return Colors.black;
    }
  }, [type]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.textTitle, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
