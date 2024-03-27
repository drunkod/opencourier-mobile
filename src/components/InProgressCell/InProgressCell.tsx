import React, { useContext, useEffect, useState } from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { styles } from './InProgressCell.styles';
import { CourierTip, Order, OrderState, User } from '@app/types/types';
import { Images } from '@app/utilities/images';
import UserContext from '@app/context/userContext';
import { useTranslation } from 'react-i18next';
import { InProgressCellHeader } from '../InProgressCellHeader/InProgressCellHeader';
import { InProgressAdress } from '../InProgressAddress/InProgressAddress';
import { InProgressNotes } from '../InProgressNotes/InProgressNotes';
import { InProgressMap } from '../InProgressMap/InProgressMap';
import { NextStep } from '../NextStep/NextStep';
import { useSelector } from 'react-redux';
import { selectUser } from '@app/redux/user/user';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  itemsConfirmed: boolean;
  orderState: OrderState;
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
  onOrderItemsListForCustomer: (order: Order, customer: User) => void;
  onReportIssue: (order: Order) => void;
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
  onOrderItemsListForCustomer,
  onReportIssue,
  orderState,
}: Props) => {
  const { t } = useTranslation();
  const [topExpanded, setTopExpanded] = useState<boolean>(true);
  const [bottomExpanded, setBottomExpanded] = useState<boolean>(false);
  const { user } = useSelector(selectUser)
  const [distance, setDistance] = useState<number>(0); // meters
  const [duration, setDuration] = useState<number>(0); // seconds

  const getDistance = async () => {
    // TODO: Make sure coordinates are correct
    const url = `http://router.project-osrm.org/route/v1/driving/${user?.location?.coordinates[0]},${user?.location?.coordinates[1]};${order.pickup.coordinates.longitude},${order.pickup.coordinates.latitude};${order.dropoff.coordinates.longitude},${order.dropoff.coordinates.latitude}`;
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

  return (
    <View style={[styles.container, style]}>
      <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
        <InProgressCellHeader
          title={order.merchant_name ?? 'N/A'}
          icon={Images.Storefront}
          expanded={topExpanded}
          onExpandedPress={() => setTopExpanded(!topExpanded)}
          finished={
            orderState === OrderState.orderDeliveryInProgress ||
            orderState === OrderState.deliveryDone
          }
        />

        <View style={styles.containerContentRestaurant}>
          <View style={styles.containerLeft}>
            <View style={styles.verticalLine} />
          </View>

          <View style={styles.containerInfo}>
            <View style={[styles.colapsable]}>
              <InProgressAdress
                order={order}
                customerOrRestaurant="restaurant"
                onAddressPress={() => onRestaurantAddressPress(order)}
                onCall={() => onCallRestaurant(order)}
                onCopyAddress={() => onMessageRestaurant(order)}
                expanded={topExpanded}
              />
              {orderState === OrderState.orderPickup ||
                (orderState === OrderState.confirmingOrderItems && (
                  <InProgressMap
                    order={order}
                    user={user!}
                    distance={distance}
                    duration={duration}
                  />
                ))}

              <InProgressNotes
                order={order}
                notes={order.courier_tips_for_merchant}
                headerTitle={t('translations:restaurant_notes')}
                onNotePress={note => onPickupInstructionPress(order, note)}
                expanded={topExpanded}
                noteEditingDisabled={true}
              />

              <InProgressNotes
                order={order}
                notes={order.courier_tips_for_merchant}
                headerTitle={t('translations:location_courier_notes')}
                onNotePress={note => onPickupInstructionPress(order, note)}
                onNoteDelete={(ord, note) => onNoteDelete(ord, note)}
                onNoteEdit={(ord, note) => onNoteEdit(ord, note)}
                onNoteAdd={() => onAddNote(order)}
                expanded={topExpanded}
                noteEditingDisabled={false}
              />
            </View>
          </View>
        </View>

        <InProgressCellHeader
          title={order.customer_name ?? 'N/A'}
          icon={Images.HouseGray}
          expanded={bottomExpanded}
          onExpandedPress={() => setBottomExpanded(!bottomExpanded)}
          finished={orderState === OrderState.deliveryDone}
        />

        <View style={styles.containerContentRestaurant}>
          <View style={styles.containerLeft} />
          <View style={styles.containerInfo}>
            <View style={[styles.colapsable]}>
              <InProgressAdress
                order={order}
                customerOrRestaurant="customer"
                onAddressPress={() => onCustomerAddressPress(order)}
                onCall={() => onCallCustomer(order)}
                onCopyAddress={() => onMessageCustomer(order)}
                expanded={bottomExpanded}
              />

              <InProgressNotes
                order={order}
                notes={order.courier_tips_for_merchant}
                headerTitle={t('translations:customer_notes')}
                onNotePress={note => onPickupInstructionPress(order, note)}
                expanded={bottomExpanded}
                noteEditingDisabled={true}
              />

              <InProgressNotes
                order={order}
                notes={order.courier_tips_for_merchant}
                headerTitle={t('translations:location_courier_notes')}
                onNotePress={note => onPickupInstructionPress(order, note)}
                onNoteDelete={note => onNoteDelete(order, note)}
                onNoteEdit={note => onNoteEdit(order, note)}
                onNoteAdd={() => onAddNote(order)}
                expanded={bottomExpanded}
                noteEditingDisabled={false}
              />
            </View>
          </View>
        </View>
      </View>

      <NextStep
        order={order}
        state={orderState}
        onConfirmOrderItems={() => {
          onConfirmItems(order);
          setTopExpanded(false);
          setBottomExpanded(true);
        }}
        onMarkAsDelivered={() => onMarkAsDelivered(order)}
        onOrderItemsListForCustomer={() =>
          onOrderItemsListForCustomer(order, {})
        }
        onReportIssue={() => onReportIssue(order)}
      />
    </View>
  );
};
