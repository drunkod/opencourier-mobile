import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { styles } from './TriangleDown.styles';
import { TriangleUp } from '../TriangleUp/TriangleUp';

type Props = {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
  backgroundColor: string;
};

export const TriangleDown = ({
  style,
  width,
  height,
  backgroundColor,
}: Props) => {
  return (
    <TriangleUp
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      style={[styles.triangleDown, style]}
    />
  );
};
