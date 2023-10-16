import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { styles } from './TriangleUp.styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
  backgroundColor: string;
};

export const TriangleUp = ({
  style,
  width,
  height,
  backgroundColor,
}: Props) => {
  return (
    <View
      style={[
        styles.triangle,
        style,
        {
          borderLeftWidth: width / 2,
          borderRightWidth: width / 2,
          borderBottomWidth: height,
          borderBottomColor: backgroundColor,
        },
      ]}
    />
  );
};
