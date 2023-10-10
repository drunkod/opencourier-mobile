import React, { useMemo } from 'react';
import {
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './ProfileBadge.styles';
import { UserStatus } from '@app/types/types';
import { Colors } from '@app/styles/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  userStatus: UserStatus;
  discreteStatusIndicator?: boolean;
};

export const ProfileBadge = ({
  style,
  onPress,
  userStatus,
  discreteStatusIndicator,
}: Props) => {
  const backgroundColor = useMemo(() => {
    switch (userStatus) {
      case UserStatus.Online:
        return Colors.green1;
      case UserStatus.Offline:
        return Colors.red1;
      case UserStatus.LastCall:
        return Colors.gray1;
    }
  }, [userStatus]);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={discreteStatusIndicator}>
      <View style={styles.containerImage}>
        <Image source={Images.User} />
      </View>
      {discreteStatusIndicator && (
        <View
          style={[
            styles.statusIndicatorSmall,
            { backgroundColor: backgroundColor },
          ]}
        />
      )}
      {!discreteStatusIndicator && (
        <View
          style={[
            styles.containerStatus,
            { backgroundColor: backgroundColor },
          ]}>
          <Text style={styles.textStatus}>{userStatus}</Text>
          <Image source={Images.ArrowRightSmall} style={styles.arrow} />
        </View>
      )}
    </TouchableOpacity>
  );
};
