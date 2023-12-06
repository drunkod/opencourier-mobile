import React, { useMemo } from 'react';
import { Image, StyleProp, ViewStyle, View, Text } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './HomeEmptyState.styles';
import { HomeEmptyState } from '@app/types/types';
import { useTranslation } from 'react-i18next';

type Props = {
  style?: StyleProp<ViewStyle>;
  state: HomeEmptyState;
};

export const HomeEmptyStateComponent = ({ style, state }: Props) => {
  const { t } = useTranslation();
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
        return t('translations:no_new_orders');
      case HomeEmptyState.History:
        return t('translations:no_previous_orders');
      case HomeEmptyState.InProgress:
        return t('translations:no_orders_in_progress');
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
            {t('translations:notify_when_order')}
          </Text>
        </>
      )}
    </View>
  );
};
