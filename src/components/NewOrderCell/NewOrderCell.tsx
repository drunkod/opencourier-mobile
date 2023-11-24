import React, { useContext } from 'react';
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
import UserContext from '@app/context/userContext';
import Map from '../Map/Map';
import { RootState } from '@app/redux/store';
import { useSelector } from 'react-redux';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  autoAcceptOrders: boolean;
  onAccept: (order: Order) => void;
  onDecline: (order: Order) => void;
  onCopyCustomer: (order: Order) => void;
  onCopyRestaurant: (order: Order) => void;
  secondsRemaining?: number;
};

export const NewOrderCell = ({
  style,
  order,
  onAccept,
  onDecline,
  autoAcceptOrders,
  onCopyCustomer,
  onCopyRestaurant,
  secondsRemaining,
}: Props) => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textPrice}>{'$' + order.income?.total}</Text>
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
              <Text style={styles.textName}>{order.merchant_name}</Text>
              <Text style={styles.textAddress}>
                {order.pickup?.location?.addressLine1}
              </Text>
            </View>
            <TouchableOpacity onPress={() => onCopyRestaurant(order)}>
              <View style={styles.containerChats}>
                <Image source={Images.Chats} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMap}>
            {user && <Map order={order} user={user} />}
            <View style={styles.containerAway}>
              <View style={styles.containerTextAway}>
                <Image source={Images.Distance} />
                <Text style={styles.textDistance}>3.5 mi away</Text>
              </View>
              <View style={styles.containerTextAway}>
                <Image source={Images.Clock} />
                <Text style={styles.textDistance}>2 min away</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerAddressButton}>
            <View style={styles.containerText}>
              <Text style={styles.textName}>{order.customer_name}</Text>
              <Text style={styles.textAddress}>
                {order.dropoff.location.addressLine1}
              </Text>
            </View>
            <TouchableOpacity onPress={() => onCopyCustomer(order)}>
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
            secondsRemaining={secondsRemaining}
            style={styles.buttonTop}
            type={ButtonOrderType.declineNow}
            onPress={() => onDecline(order)}
          />
          <ButtonOrder
            secondsRemaining={secondsRemaining}
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
