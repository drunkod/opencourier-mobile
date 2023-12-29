import React from 'react';
import { Image, StyleProp, ViewStyle, View, Text } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './OrganizationEmptyState.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const OrganizationEmptyState = ({ style }: Props) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.container, style]}>
      <Image source={Images.Car} style={styles.imageSmall} />
      <Text style={styles.title}>{t('translations:deli_is_made')}</Text>
      <Text style={styles.subtitle}>
        {t('translations:quickly_find_restaurant')}
      </Text>
    </View>
  );
};
