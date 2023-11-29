import React, { useContext, useEffect, useState } from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './InProgressCell.styles';
import { CourierTip, Order, PickupInstruction } from '@app/types/types';
import { Images } from '@app/utilities/images';
import { Button, ButtonType } from '../Button/Button';
import { PickupInstructionCell } from '../PickupInstructionsCell/PickupInstructionCell';
import { DeliveryInstructionsCell } from '../DeliveryInstructionsCell/DeliveryInstructionsCell';
import { NoteCell } from '../NoteCell/NoteCell';
import UserContext from '@app/context/userContext';
import Map from '../Map/Map';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  itemsConfirmed: boolean;
  onContactRestaurant: (order: Order) => void;
  onContactCustomer: (order: Order) => void;
  onConfirmItems: (order: Order) => void;
  onMarkAsDelivered: (order: Order) => void;
  onCopyRestaurant: (order: Order) => void;
  onCopyCustomer: (order: Order) => void;
  onMapPress: (order: Order) => void;
  onAddNote: (order: Order) => void;
  onPickupInstructionPress: (order: Order, note: CourierTip) => void;
};

export const InProgressCell = ({
  style,
  order,
  itemsConfirmed,
  onContactRestaurant,
  onContactCustomer,
  onConfirmItems,
  onMarkAsDelivered,
  onCopyRestaurant,
  onCopyCustomer,
  onMapPress,
  onAddNote,
  onPickupInstructionPress,
}: Props) => {
  const [topExpanded, setTopExpanded] = useState<boolean>(true);
  const [bottomExpanded, setBottomExpanded] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const [distance, setDistance] = useState<number>(0); // meters
  const [duration, setDuration] = useState<number>(0); // seconds

  const getDistance = async () => {
    const url = `http://router.project-osrm.org/route/v1/driving/${user?.location?.lon},${user?.location?.lat};${order.pickup.coordinates.longitude},${order.pickup.coordinates.latitude};${order.dropoff.coordinates.longitude},${order.dropoff.coordinates.latitude}`;
    await fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.routes[0].duration) {
          setDuration(json.routes[0].duration);
        }
        if (json.routes[0].distance) {
          setDistance(json.routes[0].distance);
        }
      })
      .catch(error => {
        // console.warn(error);
      });
  };

  useEffect(() => {
    getDistance();
  }, []);

  const handleConfirmItems = (order: Order) => {
    if (!itemsConfirmed) {
      onConfirmItems(order);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerHeader}>
        <Image
          source={Images.RestaurantGray}
          style={styles.iconGrayRestaurant}
        />
        <Text style={styles.textName}>{order.merchant_name ?? 'N/A'}</Text>
        <TouchableOpacity
          style={styles.buttonCarret}
          onPress={() => setTopExpanded(!topExpanded)}>
          <Image
            source={Images.CaretDown}
            style={[
              styles.iconCaret,
              topExpanded && { transform: [{ rotate: '180deg' }] },
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerContentRestaurant}>
        <View style={styles.containerLeft}>
          <View style={styles.verticalLine} />
        </View>
        <View style={styles.containerInfo}>
          <View
            style={[
              styles.colapsable,
              !topExpanded && { height: 0 },
              topExpanded && { overflow: 'visible' },
            ]}>
            <View style={styles.containerAddressButton}>
              <Text style={styles.textAddress}>
                {`${order.dropoff.location.addressLine1 ?? 'N/A'} ${
                  order.dropoff.location.addressLine2 ?? 'N/A'
                } ${order.dropoff.location.countryCode ?? 'N/A'} ${
                  order.dropoff.location.locality ?? 'N/A'
                } ${order.dropoff.location.postalCode ?? 'N/A'}`}
              </Text>
              <TouchableOpacity onPress={() => onCopyRestaurant(order)}>
                <View style={styles.containerChats}>
                  <Image source={Images.Chats} />
                </View>
              </TouchableOpacity>
            </View>
            {/* {order.restaurantNotes && (
              <View style={styles.containerNotes}>
                {order.restaurantNotes.map(note => {
                  return <NoteCell text={note} />;
                })}
              </View>
            )} */}
            <View style={styles.containerInstructions}>
              {order.courier_tips_for_merchant &&
                order.courier_tips_for_merchant.map(item => {
                  return (
                    <PickupInstructionCell
                      instruction={item}
                      onPress={instruction =>
                        onPickupInstructionPress(order, instruction)
                      }
                    />
                  );
                })}
              <TouchableOpacity
                style={styles.buttonAddNote}
                onPress={() => onAddNote(order)}>
                <Image source={Images.PlusCircle} />
                <Text style={styles.textAddNote}>Type a note</Text>
              </TouchableOpacity>
            </View>

            <Button
              textStyle={{ fontSize: 20, fontWeight: '700' }}
              style={styles.buttonTop}
              type={ButtonType.black}
              icon={Images.PhoneOutgoing}
              title="Contact restaurant"
              onPress={() => onContactRestaurant(order)}
            />
            <Button
              textStyle={{ fontSize: 20, fontWeight: '700' }}
              type={ButtonType.green}
              icon={itemsConfirmed ? Images.Checkmark : Images.Hamburger}
              title={itemsConfirmed ? 'Items confirmed' : 'Confirm items'}
              onPress={() => handleConfirmItems(order)}
            />
          </View>

          <View style={styles.containerMap}>
            <TouchableOpacity onPress={() => onMapPress(order)}>
              <Map order={order} user={user} />
            </TouchableOpacity>
            <View style={styles.containerAway}>
              <View style={styles.containerTextAway}>
                <Image source={Images.Distance} />
                <Text style={styles.textDistance}>{`${Math.ceil(
                  Math.ceil(distance / 1000) / 1.6,
                )} mi away`}</Text>
              </View>
              <View style={styles.containerTextAway}>
                <Image source={Images.Clock} />
                <Text style={styles.textDistance}>{`${Math.ceil(
                  Math.ceil(duration) / 60,
                )} min away`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerHeader}>
        <Image source={Images.HouseGray} style={styles.iconGrayRestaurant} />
        <Text style={styles.textName}>{order.customer_name ?? 'N/A'}</Text>
        <TouchableOpacity
          style={styles.buttonCarret}
          onPress={() => setBottomExpanded(!bottomExpanded)}>
          <Image
            source={Images.CaretDown}
            style={[
              styles.iconCaret,
              bottomExpanded && { transform: [{ rotate: '180deg' }] },
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerContentRestaurant}>
        <View style={styles.containerLeft} />
        <View style={styles.containerInfo}>
          <View
            style={[
              styles.colapsable,
              !bottomExpanded && { height: 0 },
              bottomExpanded && { overflow: 'visible' },
            ]}>
            <View style={styles.containerAddressButton}>
              <Text style={styles.textAddress}>
                {`${order.pickup.location.addressLine1 ?? 'N/A'} ${
                  order.pickup.location.addressLine2 ?? 'N/A'
                } ${order.pickup.location.countryCode ?? 'N/A'} ${
                  order.pickup.location.locality ?? 'N/A'
                } ${order.pickup.location.postalCode ?? 'N/A'}`}
              </Text>
              <TouchableOpacity onPress={() => onCopyCustomer(order)}>
                <View style={styles.containerChats}>
                  <Image source={Images.Chats} />
                </View>
              </TouchableOpacity>
            </View>
            {order.customer_notes_for_courier && (
              <View style={styles.containerNotes}>
                {order.customer_notes_for_courier.map(note => {
                  return <NoteCell text={note} />;
                })}
              </View>
            )}
            {order.courier_notes_for_customer && (
              <View style={styles.containerInstructions}>
                {order.courier_notes_for_customer.map(item => {
                  return <DeliveryInstructionsCell type={item} />;
                })}
              </View>
            )}

            <Button
              textStyle={{ fontSize: 20, fontWeight: '700' }}
              style={styles.buttonTop}
              type={ButtonType.black}
              icon={Images.PhoneOutgoing}
              title="Contact customer"
              onPress={() => onContactCustomer(order)}
            />
            <Button
              textStyle={{ fontSize: 20, fontWeight: '700' }}
              type={ButtonType.gray}
              icon={Images.CheckFat}
              title="Mark as delivered"
              onPress={() => onMarkAsDelivered(order)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
