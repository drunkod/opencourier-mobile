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
import moment from 'moment';
import { formatMockDate, formatServer } from '@app/utilities/dates';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  onPress: (order: Order) => void;
};

export const HistoryCell = ({ style, order, onPress }: Props) => {
  const date = moment(order.created_at, formatServer);
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
              {order.customer_name ?? 'N/A'}
            </Text>
            <Image
              // source={{ uri: order.deliveredTo.profilePictureUrl }}
              style={styles.imageUser}
            />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.containerInfo}>
          <Image source={Images.Calendar} style={styles.iconSmall} />
          <Text style={styles.textInfo}>{date.format(formatMockDate)}</Text>
        </View>
        <View style={[styles.containerInfo, { marginVertical: 10 }]}>
          <Image source={Images.Storefront} style={styles.iconSmall} />
          <Text style={styles.textInfo}>{order.merchant_name ?? 'N/A'}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Image source={Images.Money} style={styles.iconSmall} />
          <Text style={styles.textInfo}>{'$' + order.income.total_charge}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
