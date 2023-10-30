import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './PhotoCell.styles';
import { Images } from '@app/utilities/images';

type Props = {
  style?: StyleProp<ViewStyle>;
  image: string;
  onDelete: () => void;
  onRetake: () => void;
};

export const PhotoCell = ({ style, image, onDelete, onRetake }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.containerRight}>
        <TouchableOpacity style={styles.containerHorizontal} onPress={onRetake}>
          <Image source={Images.ArrowCounterClockwise} style={styles.arrow} />
          <Text style={styles.text}>Retake photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerHorizontal} onPress={onDelete}>
          <Image source={Images.XCircle} style={styles.arrow} />
          <Text style={styles.text}>Delete photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
