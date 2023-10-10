import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { styles } from './WaitingForOrders.styles';
import { Colors } from '@app/styles/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  progress?: number;
};

export const WaitingForOrders = ({ style, progress }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <View style={styles.containerLoader}>
          <ActivityIndicator size="small" color={Colors.green1} />
        </View>
        <Text style={styles.text}>Waiting for new orders</Text>
      </View>
    </View>
  );
};
