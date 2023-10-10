import React, { useMemo } from 'react';
import {
  Image,
  StyleProp,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './SideMenuItemPlain.styles';
import { SideMenuItem } from '@app/types/types';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: (item: SideMenuItem) => void;
  item: SideMenuItem;
  hideArrow?: boolean;
};

export const SideMenuItemPlain = ({
  style,
  onPress,
  item,
  hideArrow,
}: Props) => {
  const icon = useMemo(() => {
    switch (item) {
      case SideMenuItem.Orders:
        return Images.Orders;
      case SideMenuItem.Earnings:
        return Images.Earnings;
      case SideMenuItem.Payout:
        return Images.Payout;
      case SideMenuItem.Support:
        return Images.Support;
      case SideMenuItem.Settings:
        return Images.Settings;
      case SideMenuItem.Logout:
        return Images.Logout;
    }
  }, [item]);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress(item)}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{item}</Text>
      {!hideArrow && (
        <Image source={Images.ArrowRightBlack} style={styles.iconArrow} />
      )}
    </TouchableOpacity>
  );
};
