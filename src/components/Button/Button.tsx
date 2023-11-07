import React, { useMemo } from 'react';
import { Colors } from '@app/styles/colors';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  Image,
  ActivityIndicator,
} from 'react-native';
import { styles } from './Button.styles';

export enum ButtonType {
  red,
  green,
  black,
  white,
  yellow,
  gray,
}

type Props = {
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: ButtonType;
  onPress: () => void;
  icon?: ImageSourcePropType;
  isLoading?: boolean;
};

export const Button = ({
  title,
  disabled,
  style,
  textStyle,
  type = ButtonType.black,
  onPress,
  icon,
  isLoading,
}: Props) => {
  const backgroundColor = useMemo(() => {
    if (disabled) {
      return Colors.gray8;
    }
    switch (type) {
      case ButtonType.black:
        return Colors.black1;
      case ButtonType.green:
        return Colors.green1;
      case ButtonType.red:
        return Colors.red1;
      case ButtonType.yellow:
        return Colors.yellow1;
      case ButtonType.white:
        return Colors.white;
      case ButtonType.gray:
        return Colors.gray8;
    }
  }, [type, disabled]);

  const textColor = useMemo(() => {
    if (disabled) {
      return Colors.gray9;
    }
    switch (type) {
      case ButtonType.yellow:
        return Colors.black1;
      case ButtonType.gray:
        return Colors.gray9;
      case ButtonType.red:
        return Colors.white;
      case ButtonType.green:
        return Colors.white;
      case ButtonType.black:
        return Colors.white;
      case ButtonType.white:
        return Colors.black1;
    }
  }, [type, disabled]);

  const iconTint = useMemo(() => {
    if (disabled) {
      return Colors.gray9;
    }
    switch (type) {
      case ButtonType.red:
        return Colors.white;
      case ButtonType.black:
        return Colors.white;
      case ButtonType.green:
        return Colors.white;
      case ButtonType.white:
        return Colors.black1;
      case ButtonType.yellow:
        return Colors.black1;
      case ButtonType.gray:
        return Colors.gray9;
    }
  }, [type, disabled]);

  const borderColor = useMemo(() => {
    switch (type) {
      case ButtonType.yellow:
        return Colors.yellow2;
      case ButtonType.red:
        return Colors.gray4;
      case ButtonType.gray:
      case ButtonType.black:
      case ButtonType.green:
      case ButtonType.white:
        return Colors.gray4;
    }
  }, [type]);

  const borderWidth = useMemo(() => {
    switch (type) {
      case ButtonType.black:
        return 0;
      case ButtonType.green:
        return 0;
      case ButtonType.red:
        return 0;
      case ButtonType.white:
      case ButtonType.yellow:
        return 2;
      case ButtonType.gray:
        return 0;
    }
  }, [type]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
        style,
      ]}>
      {isLoading && <ActivityIndicator />}
      {!isLoading && icon && (
        <Image source={icon} style={[styles.icon, { tintColor: iconTint }]} />
      )}
      {!isLoading && (
        <Text style={[styles.textTitle, { color: textColor }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
