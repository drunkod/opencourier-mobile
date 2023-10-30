import React from 'react';
import { Image, StyleProp, ViewStyle, View, Text } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './NoPayoutActivity.styles';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const NoPayoutActivity = ({ style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={Images.Car} style={styles.imageSmall} />
      <Text style={styles.title}>No Payout Activity</Text>
      <Text style={styles.subtitle}>
        {'You don’t have any recent payouts.\nMake a  to start getting paid.'}
      </Text>
    </View>
  );
};
