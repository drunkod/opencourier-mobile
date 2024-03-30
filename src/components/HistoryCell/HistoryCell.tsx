import React, { useState } from 'react';
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
import { formatServer, formatSpaced } from '@app/utilities/dates';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '../Button/Button';

type Props = {
  style?: StyleProp<ViewStyle>;
  order: Order;
  onPress: (order: Order) => void;
};

export const HistoryCell = ({ style, order, onPress }: Props) => {
  const { t } = useTranslation();
  const date = moment(order.created_at, formatServer);
  const [colapsed, setColapsed] = useState<boolean>(false);

  const formatTime = (time: string) => new Date(time).toLocaleTimeString("en-US", { timeStyle: "short" });
  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: order.income.currency,
  }).format;

  return (
    <TouchableOpacity onPress={() => onPress(order)}>
      <View style={[styles.container, style]}>
        <TouchableOpacity
          style={styles.containerSpaceBetween}
          onPress={() => setColapsed(!colapsed)}>
          <View style={styles.containerTImes}>
            <View style={styles.containerTime}>
              <Text style={styles.textTime}>{formatTime(order.date)}</Text>
            </View>
            <Text style={{}}>{'-'}</Text>
            <View style={styles.containerTime}>
              <Text style={styles.textTime}>{formatTime(order.updated_at)}</Text>
            </View>
          </View>
          <View style={styles.containerCarret}>
            <View style={styles.containerStatus}>
              <Text style={styles.textStatus}>{formatCurrency(order.income.total_charge)}</Text>
            </View>
            <Image
              source={Images.CaretDown}
              style={[
                styles.imageCarret,
                !colapsed && { transform: [{ rotate: '180deg' }] },
              ]}
            />
          </View>
        </TouchableOpacity>

        <View style={colapsed && { height: 0, overflow: 'hidden' }}>
          <View style={styles.separator} />
          <View style={styles.containerInfo}>
            <Image source={Images.CalendarThin} style={styles.iconSmall} />
            <Text style={styles.textInfo}>{date.format(formatSpaced)}</Text>
          </View>
          <View style={[styles.containerInfo]}>
            <Image source={Images.Storefront} style={styles.iconSmall} />
            <Text style={styles.textInfo}>{order.merchant_name ?? 'N/A'}</Text>
          </View>
          <View style={[styles.containerInfo]}>
            <Image source={Images.HandCoins} style={styles.iconSmall} />
            <Text style={styles.textInfo}>
              {formatCurrency(order?.income?.pay)}
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <Image source={Images.HandHeart} style={styles.iconSmall} />
            <Text style={styles.textInfo}>{formatCurrency(order.income.tips)}</Text>
          </View>
          <Button
            type={ButtonType.grayBGRedText}
            style={{ height: 42 }}
            title={t('translations:report_order')}
            onPress={() => undefined}
            textStyle={{ fontSize: 12, fontWeight: '700' }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
