import React from 'react';
import { Image, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './BackNavButton.styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const BackNavButton = ({ style, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={Images.ArrowLeft} />
    </TouchableOpacity>
  );
};
