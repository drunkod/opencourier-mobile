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
import { useTranslation } from 'react-i18next';
import { markAsDelivered } from '@app/redux/order/order';
import { Colors } from '@app/styles/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  itemsConfirmed: boolean;
  onConfirmItems: (order: Order) => void;
  onMarkAsDelivered: (order: Order) => void;
  onAddNote: (order: Order) => void;
  onPickupInstructionPress: (order: Order, note: CourierTip) => void;
  onNoteEdit: (order: Order, note: CourierTip) => void;
  onNoteDelete: (order: Order, note: CourierTip) => void;
  onCustomerAddressPress: (order: Order) => void;
  onRestaurantAddressPress: (order: Order) => void;
  onMessageRestaurant: (order: Order) => void;
  onCallRestaurant: (order: Order) => void;
  onMessageCustomer: (order: Order) => void;
  onCallCustomer: (order: Order) => void;
};

export const InProgressCell = ({
  style,
  order,
  itemsConfirmed,
  onConfirmItems,
  onMarkAsDelivered,
  onAddNote,
  onPickupInstructionPress,
  onCustomerAddressPress,
  onRestaurantAddressPress,
  onNoteDelete,
  onNoteEdit,
  onMessageCustomer,
  onMessageRestaurant,
  onCallCustomer,
  onCallRestaurant,
}: Props) => {
  const { t } = useTranslation();
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
      <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
        <View style={styles.containerHeader}>
          <Image source={Images.Storefront} style={styles.iconGrayRestaurant} />
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
            <View style={[styles.colapsable]}>
              <View
                style={[
                  styles.containerAddressButton,
                  !topExpanded && { height: 0 },
                  topExpanded && { overflow: 'visible' },
                ]}>
                <Text
                  style={styles.textAddress}
                  onPress={() => onRestaurantAddressPress(order)}>
                  {`${order.pickup.location.addressLine1 ?? 'N/A'} ${
                    order.pickup.location.addressLine2 ?? 'N/A'
                  } ${order.pickup.location.countryCode ?? 'N/A'} ${
                    order.pickup.location.locality ?? 'N/A'
                  } ${order.pickup.location.postalCode ?? 'N/A'}`}
                </Text>
                <TouchableOpacity
                  style={styles.buttonAddress}
                  onPress={() => onMessageRestaurant(order)}>
                  <Image
                    source={Images.Chats}
                    style={styles.iconAddressButton}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonAddress}
                  onPress={() => onCallRestaurant(order)}>
                  <Image
                    source={Images.PhoneSmall}
                    style={styles.iconAddressButton}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.containerMap}>
                <Map order={order} user={user} />
                <View style={styles.containerAway}>
                  <View style={styles.containerTextAway}>
                    <Image source={Images.Distance} />
                    <Text style={styles.textDistance}>{`${Math.ceil(
                      Math.ceil(distance / 1000) / 1.6,
                    )} mi ${t('translations:away')}`}</Text>
                  </View>
                  <View style={styles.containerTextAway}>
                    <Image source={Images.Clock} />
                    <Text style={styles.textDistance}>{`${Math.ceil(
                      Math.ceil(duration) / 60,
                    )} min ${t('translations:away')}`}</Text>
                  </View>
                </View>
              </View>

              <View
                style={[
                  styles.noteHeader,
                  !topExpanded && { height: 0 },
                  topExpanded && { overflow: 'visible' },
                ]}>
                <Text style={styles.textNotesHeader}>
                  {t('translations:restaurant_notes')}
                </Text>
                <View style={styles.notesDash} />
              </View>
              <View
                style={[
                  styles.containerInstructions,
                  !topExpanded && { height: 0 },
                  topExpanded && { overflow: 'visible' },
                ]}>
                {order.courier_tips_for_merchant &&
                  order.courier_tips_for_merchant.map(item => {
                    return (
                      <PickupInstructionCell
                        editDisabled={true}
                        endorsed={Math.floor(Math.random() * 10) % 2 === 0}
                        instruction={item}
                        onPress={instruction =>
                          onPickupInstructionPress(order, instruction)
                        }
                      />
                    );
                  })}
              </View>

              <View
                style={[
                  styles.noteHeader,
                  !topExpanded && { height: 0 },
                  topExpanded && { overflow: 'visible' },
                ]}>
                <Text style={styles.textNotesHeader}>
                  {t('translations:location_courier_notes')}
                </Text>
                <View style={styles.notesDash} />
                <TouchableOpacity
                  style={styles.addNote}
                  onPress={() => onAddNote(order)}>
                  <Image source={Images.PlusBlack} />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.containerInstructions,
                  !topExpanded && { height: 0 },
                  topExpanded && { overflow: 'visible' },
                ]}>
                {order.courier_tips_for_merchant &&
                  order.courier_tips_for_merchant.map(item => {
                    return (
                      <PickupInstructionCell
                        onEdit={() => onNoteEdit(order, item)}
                        onDelete={() => onNoteDelete(order, item)}
                        editDisabled={false}
                        endorsed={Math.floor(Math.random() * 10) % 2 === 0}
                        instruction={item}
                        onPress={instruction =>
                          onPickupInstructionPress(order, instruction)
                        }
                      />
                    );
                  })}
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
                <Text
                  style={styles.textAddress}
                  onPress={() => onCustomerAddressPress(order)}>
                  {`${order.dropoff.location.addressLine1 ?? 'N/A'} ${
                    order.dropoff.location.addressLine2 ?? 'N/A'
                  } ${order.dropoff.location.countryCode ?? 'N/A'} ${
                    order.dropoff.location.locality ?? 'N/A'
                  } ${order.dropoff.location.postalCode ?? 'N/A'}`}
                </Text>
                <TouchableOpacity
                  style={styles.buttonAddress}
                  onPress={() => onMessageCustomer(order)}>
                  <Image
                    source={Images.Chats}
                    style={styles.iconAddressButton}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonAddress}
                  onPress={() => onCallCustomer(order)}>
                  <Image
                    source={Images.PhoneSmall}
                    style={styles.iconAddressButton}
                  />
                </TouchableOpacity>
              </View>

              <View style={[styles.noteHeader]}>
                <Text style={styles.textNotesHeader}>
                  {t('translations:customer_notes')}
                </Text>
                <View style={styles.notesDash} />
              </View>
              <View style={styles.containerInstructions}>
                {order.courier_tips_for_merchant &&
                  order.courier_tips_for_merchant.map(item => {
                    return (
                      <PickupInstructionCell
                        editDisabled={true}
                        endorsed={Math.floor(Math.random() * 10) % 2 === 0}
                        instruction={item}
                        onPress={instruction =>
                          onPickupInstructionPress(order, instruction)
                        }
                      />
                    );
                  })}
              </View>
              {/* {order.customer_notes_for_courier && (
              <View style={styles.containerNotes}>
                {['No bell ringing', 'Leave at door'].map(note => {
                  return <NoteCell text={note} />;
                })}
              </View>
            )} */}

              <View style={[styles.noteHeader]}>
                <Text style={styles.textNotesHeader}>
                  {t('translations:location_courier_notes')}
                </Text>
                <View style={styles.notesDash} />
              </View>
              <View style={styles.containerInstructions}>
                {order.courier_tips_for_merchant &&
                  order.courier_tips_for_merchant.map(item => {
                    return (
                      <PickupInstructionCell
                        editDisabled={true}
                        endorsed={Math.floor(Math.random() * 10) % 2 === 0}
                        instruction={item}
                        onPress={instruction =>
                          onPickupInstructionPress(order, instruction)
                        }
                      />
                    );
                  })}
              </View>
              {/* {order.courier_notes_for_customer && (
              <View style={styles.containerInstructions}>
                {order.courier_notes_for_customer.map(item => {
                  return <DeliveryInstructionsCell type={item} />;
                })}
              </View>
            )} */}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.nextStep}>
        <View style={styles.blueSeparator} />
        <View style={styles.flexRow}>
          <Image source={Images.ArrowsForward} />
          <Text style={styles.textNextStep}>Next Step</Text>
        </View>
        {itemsConfirmed ? (
          <Button
            style={{ marginHorizontal: 12 }}
            type={ButtonType.green}
            icon={Images.CheckWhite}
            title={t('translations:mark_as_delivered')}
            onPress={() => onMarkAsDelivered(order)}
          />
        ) : (
          <Button
            style={{ marginHorizontal: 12 }}
            type={ButtonType.green}
            icon={Images.Hamburger}
            title={t('translations:confirm_items')}
            onPress={() => {
              onConfirmItems(order);
              setTopExpanded(false);
            }}
          />
        )}
      </View>
    </View>
  );
};
