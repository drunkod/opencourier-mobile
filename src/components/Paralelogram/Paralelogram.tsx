import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { styles } from './Paralelogram.styles';
import { TriangleUp } from '../TriangleUp/TriangleUp';
import { TriangleDown } from '../TriangleDown/TriangleDown';

type Props = {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
  backgroundColor: string;
};

export const Paralelogram = ({
  style,
  width,
  height,
  backgroundColor,
}: Props) => {
  return (
    <View
      style={[
        { width: width, height: height, backgroundColor: backgroundColor },
        style,
      ]}>
      <TriangleUp
        backgroundColor={backgroundColor}
        width={(2 * width) / 3}
        height={height}
        style={[styles.parallelogramRight, { right: -(width / 3) }]}
      />
      <View
        style={[
          styles.parallelogramInner,
          { width: width, height: height, backgroundColor: backgroundColor },
        ]}
      />
      <TriangleDown
        backgroundColor={backgroundColor}
        width={(2 * width) / 3}
        height={height}
        style={[styles.parallelogramLeft, { left: -(width / 3) }]}
      />
    </View>
  );
};
