import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './NextStep.styles';
import { Images } from '@app/utilities/images';
import { useTranslation } from 'react-i18next';
import { Order, ToastMessage, User } from '@app/types/types';
import { Button, ButtonType } from '../Button/Button';
import { Toast } from '../Toast/Toast';
import { OrderStatus } from '@app/types/enums';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  onReportIssue?: (order: Order) => void;
  onConfirmOrderItems: (order: Order) => void;
  onMarkAsDelivered: (order: Order) => void;
  onOrderItemsListForCustomer: (customer: User) => void;
};

export const NextStep = ({
  style,
  order,
  onReportIssue,
  onConfirmOrderItems,
  onMarkAsDelivered,
  onOrderItemsListForCustomer,
}: Props) => {
  const { t } = useTranslation();

  const userCell = () => {
    return (
      <TouchableOpacity
        style={styles.cell}
        onPress={() => onOrderItemsListForCustomer({})}>
        <Image
          source={Images.CheckmarkGreen}
          style={{ width: 20, height: 20 }}
        />
        <View style={styles.cellText}>
          <Text style={styles.cellName}>Test User</Text>
          <Text style={styles.cellItems}>3 items</Text>
        </View>
        <Image source={Images.ArrowRightBlack} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.nextStep}>
      <View style={styles.blueSeparator} />
      <View style={styles.flexRow}>
        <Image source={Images.ArrowsForward} />
        <Text style={styles.textNextStep}>Next Step</Text>
      </View>
      {order.status === OrderStatus.dispatched && (
        <Toast
          toast={ToastMessage.get_closer}
          disableClose
          style={{ marginBottom: 10 }}
        />
      )}
      {order.status === OrderStatus.dispatched &&
        userCell()}
      {order.status === OrderStatus.dispatched && (
        <Button
          style={{ marginHorizontal: 12, marginTop: 10 }}
          type={ButtonType.green}
          icon={Images.Hamburger}
          title={t('translations:confirm_items')}
          onPress={() => {
            onConfirmOrderItems(order);
          }}
        />
      )}
      {order.status === OrderStatus.picked_up && (
        <>
          <Button
            style={{ marginHorizontal: 12, marginTop: 10 }}
            type={ButtonType.green}
            icon={Images.CheckWhite}
            title={t('translations:mark_as_delivered')}
            onPress={() => onMarkAsDelivered(order)}
          />
          <Button
            style={{ marginHorizontal: 12, marginTop: 10 }}
            type={ButtonType.redBGRedText}
            title={t('translations:report_issue')}
            onPress={() => onReportIssue && onReportIssue(order)}
          />
        </>
      )}
    </View>
  );
};
