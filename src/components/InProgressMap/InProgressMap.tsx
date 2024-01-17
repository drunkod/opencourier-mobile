import React from 'react';
import { StyleProp, ViewStyle, View, Text, Image } from 'react-native';
import { styles } from './InProgressMap.styles';
import { Images } from '@app/utilities/images';
import Map from '../Map/Map';
import { useTranslation } from 'react-i18next';
import { Order, User } from '@app/types/types';

type Props = {
  style?: StyleProp<ViewStyle>;
  user: User;
  distance: number;
  duration: number;
  order: Order;
};

export const InProgressMap = ({
  style,
  user,
  distance,
  duration,
  order,
}: Props) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.containerMap, style]}>
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
  );
};
