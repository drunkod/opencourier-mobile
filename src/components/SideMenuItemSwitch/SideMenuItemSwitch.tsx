import React, { useMemo } from 'react';
import { Image, StyleProp, ViewStyle, View, Text, Switch } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './SideMenuItemSwitch.styles';
import { SideMenuItem } from '@app/types/types';
import { useTranslation } from 'react-i18next';

type Props = {
  style?: StyleProp<ViewStyle>;
  isOn: boolean;
  onValueChange: (isOn: boolean) => void;
  item: SideMenuItem;
};

export const SideMenuItemSwitch = ({
  style,
  isOn,
  onValueChange,
  item,
}: Props) => {
  const { t } = useTranslation();
  const icon = useMemo(() => {
    switch (item) {
      case SideMenuItem.Location:
        return Images.MapPin;
      case SideMenuItem.AutoOrders:
        return Images.Recycle;
    }
  }, [item]);

  return (
    <View style={[styles.container, style]}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{t(`translations:${item}`)}</Text>
      <Switch value={isOn} onValueChange={onValueChange} />
    </View>
  );
};
