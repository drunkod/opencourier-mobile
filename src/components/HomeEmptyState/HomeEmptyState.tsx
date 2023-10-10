import React, { useMemo } from 'react';
import { Image, StyleProp, ViewStyle, View, Text } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './HomeEmptyState.styles';
import { HomeEmptyState } from '@app/types/types';

type Props = {
  style?: StyleProp<ViewStyle>;
  state: HomeEmptyState;
};

export const HomeEmptyStateComponent = ({ style, state }: Props) => {
  const imageSource = useMemo(() => {
    switch (state) {
      case HomeEmptyState.WaitingNewOrders:
        return Images.Box;
      case HomeEmptyState.History:
      case HomeEmptyState.InProgress:
      case HomeEmptyState.New:
        return Images.Car;
    }
  }, [state]);

  const title = useMemo(() => {
    switch (state) {
      case HomeEmptyState.New:
        return 'No new orders';
      case HomeEmptyState.History:
        return 'No previous orders';
      case HomeEmptyState.InProgress:
        return 'No orders in progress';
      case HomeEmptyState.WaitingNewOrders:
        return '';
    }
  }, [state]);

  return (
    <View style={[styles.container, style]}>
      <Image
        source={imageSource}
        style={
          state === HomeEmptyState.WaitingNewOrders
            ? styles.imageBIg
            : styles.imageSmall
        }
      />
      {state !== HomeEmptyState.WaitingNewOrders && (
        <>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {"We'll notifiy you when you recieve a new order"}
          </Text>
        </>
      )}
    </View>
  );
};
