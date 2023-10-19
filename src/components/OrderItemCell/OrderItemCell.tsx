import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './OrderItemCell.styles';
import { Images } from '@app/utilities/images';
import { OrderItem } from '@app/types/types';

type Props = {
  style?: StyleProp<ViewStyle>;
  selected: boolean;
  item: OrderItem;
  onPress: () => undefined;
};

export const OrderItemCell = ({ style, selected, item, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.content, style]} onPress={onPress}>
      <Image source={selected ? Images.Checkbox : Images.CheckboxEmpty} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};
