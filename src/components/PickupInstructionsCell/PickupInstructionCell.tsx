import React, { useMemo } from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './PickupInstructionCell.styles';
import { CourierTip, PickupInstruction, PickupType } from '@app/types/types';
import { Images } from '@app/utilities/images';

type Props = {
  style?: StyleProp<ViewStyle>;
  instruction: CourierTip;
  onPress: (instruction: CourierTip) => void;
};

export const PickupInstructionCell = ({
  style,
  instruction,
  onPress,
}: Props) => {
  const icon = useMemo(() => {
    switch (instruction.tip_text) {
      case PickupType.CallOnArrival:
        return Images.PhoneCall;
      default:
        return null;
    }
  }, [instruction]);

  const hasTopRightIcon = useMemo(() => {
    switch (instruction.tip_text) {
      case PickupType.ParkThirdPartyLot:
      case PickupType.DontOpenBags:
        return true;
      default:
        return false;
    }
  }, [instruction]);

  return (
    <TouchableOpacity
      onPress={() => onPress(instruction)}
      style={[
        styles.content,
        style,
        hasTopRightIcon && { paddingTop: 4, paddingRight: 4 },
      ]}>
      <View style={styles.container}>
        {icon && <Image source={icon} />}
        <Text style={styles.textContent}>
          {instruction.tip_text}
          {instruction.upvotes && instruction.upvotes > 1 && (
            <Text style={styles.textBold}>{` ${instruction.upvotes}`}</Text>
          )}
        </Text>
      </View>
      {hasTopRightIcon && (
        <View style={styles.containerTopRightIcon}>
          <Image source={Images.Storefront} style={styles.iconTopRight} />
        </View>
      )}
    </TouchableOpacity>
  );
};
