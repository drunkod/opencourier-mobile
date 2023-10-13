import React from 'react';
import {
  Image,
  StyleProp,
  ViewStyle,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './HistoryCell.styles';
import { Order } from '@app/types/types';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  onPress: (order: Order) => void;
};

export const HistoryCell = ({ style, order, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(order)}>
      <View style={[styles.container, style]}>
        <View style={styles.containerSpaceBetween}>
          <Text style={styles.textId}>{order.id}</Text>
          <View style={styles.containerStatus}>
            <View style={styles.statusIndicator} />
            <Text style={styles.textStatus}>{order.status}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.containerSpaceBetween}>
          <Text style={styles.textDeliveredTo}>Delivered to</Text>
          <View style={styles.containerUser}>
            <Text style={styles.textUserName}>
              {order.deliveredTo.firstname}
            </Text>
            <Image
              source={{ uri: order.deliveredTo.profilePictureUrl }}
              style={styles.imageUser}
            />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.containerInfo}>
          <Image source={Images.Calendar} style={styles.iconSmall} />
          <Text style={styles.textInfo}>{order.date}</Text>
        </View>
        <View style={[styles.containerInfo, { marginVertical: 10 }]}>
          <Image source={Images.Storefront} style={styles.iconSmall} />
          <Text style={styles.textInfo}>{order.restaurant.name}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Image source={Images.Money} style={styles.iconSmall} />
          <Text style={styles.textInfo}>{order.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
