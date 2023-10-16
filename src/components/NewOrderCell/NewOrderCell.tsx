import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './NewOrderCell.styles';
import { Order } from '@app/types/types';
import { ButtonOrder, ButtonOrderType } from '../ButtonOrder/ButtonOrder';
import { Images } from '@app/utilities/images';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  autoAcceptOrders: boolean;
  onAccept: (order: Order) => void;
  onDecline: (order: Order) => void;
};

export const NewOrderCell = ({
  style,
  order,
  onAccept,
  onDecline,
  autoAcceptOrders,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textPrice}>{'$' + order.price}</Text>
      <View style={styles.separator} />
      <View style={styles.content}>
        <View style={styles.containerLeft}>
          <Image source={Images.RestaurantGray} />
          <View style={styles.verticalLine} />
          <Image source={Images.HouseGray} />
        </View>
        <View style={styles.containerRight}>
          <View style={styles.containerAddressButton}>
            <View style={styles.containerText}>
              <Text style={styles.textName}>{order.restaurant.name}</Text>
              <Text style={styles.textAddress}>{order.restaurant.address}</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.containerChats}>
                <Image source={Images.Chats} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMap}>
            <View style={styles.map} />
            <View style={styles.containerAway}>
              <View style={styles.containerTextAway}>
                <Image source={Images.Distance} />
                <Text style={styles.textDistance}>44 miles away</Text>
              </View>
              <View style={styles.containerTextAway}>
                <Image source={Images.Clock} />
                <Text style={styles.textDistance}>3 min away</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerAddressButton}>
            <View style={styles.containerText}>
              <Text style={styles.textName}>{order.deliveredTo.firstname}</Text>
              <Text style={styles.textAddress}>
                {order.deliveredTo.address}
              </Text>
            </View>
            <TouchableOpacity>
              <View style={styles.containerChats}>
                <Image source={Images.Chats} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {autoAcceptOrders ? (
        <>
          <ButtonOrder
            style={styles.buttonTop}
            type={ButtonOrderType.declineNow}
            onPress={() => onDecline(order)}
          />
          <ButtonOrder
            type={ButtonOrderType.accept}
            onPress={() => onAccept(order)}
          />
        </>
      ) : (
        <>
          <ButtonOrder
            style={styles.buttonTop}
            type={ButtonOrderType.acceptNow}
            onPress={() => onAccept(order)}
          />
          <ButtonOrder
            type={ButtonOrderType.decline}
            onPress={() => onDecline(order)}
          />
        </>
      )}
    </View>
  );
};
