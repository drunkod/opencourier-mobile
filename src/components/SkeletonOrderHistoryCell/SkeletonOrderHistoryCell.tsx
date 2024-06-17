import React from 'react';
import { View } from 'react-native';
import { styles } from './SkeletonOrderHistoryCell.styles';
import Skeleton from '@thevsstech/react-native-skeleton';

type Props = {};

export const SkeletonOrderHistoryCell = ({}: Props) => {
  return (
    <Skeleton>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerHorizontal}>
            <View style={styles.timeItem} />
            <View style={[styles.timeItem, { marginLeft: 20 }]} />
          </View>
          <View style={styles.containerHorizontal}>
            <View style={styles.itemPrice} />
            <View style={styles.itemArrow} />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={[styles.containerHorizontal, { marginBottom: 10 }]}>
          <View style={styles.itemIcon} />
          <View style={[styles.itemText, { width: 50 }]} />
        </View>
        <View style={[styles.containerHorizontal, { marginBottom: 10 }]}>
          <View style={styles.itemIcon} />
          <View style={[styles.itemText, { width: 100 }]} />
        </View>
        <View style={[styles.containerHorizontal, { marginBottom: 10 }]}>
          <View style={styles.itemIcon} />
          <View style={[styles.itemText, { width: 75 }]} />
        </View>
        <View style={[styles.containerHorizontal, { marginBottom: 10 }]}>
          <View style={styles.itemIcon} />
          <View style={[styles.itemText, { width: 125 }]} />
        </View>
        <View style={styles.button} />
      </View>
    </Skeleton>
  );
};
