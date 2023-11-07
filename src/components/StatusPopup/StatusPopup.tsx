import React, { useMemo } from 'react';
import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './StatusPopup.styles';
import { UserStatus } from '@app/types/types';
import { Button, ButtonType } from '../Button/Button';
import { Images } from '@app/utilities/images';
import { Colors } from '@app/styles/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  type: UserStatus;
  onAccept: (status: UserStatus) => void;
  onCancel: () => void;
};

export const StatusPopup = ({ style, type, onAccept, onCancel }: Props) => {
  const title = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return 'Going Online?';
      case UserStatus.Offline:
        return 'Going Offline?';
      case UserStatus.LastCall:
        return 'Setting to Last Call?';
    }
  }, [type]);

  const subtitle = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return 'To continue, please turn on your location services. This helps us provide a better experience tailored to your location.';
      case UserStatus.Offline:
        return 'Switching often disrupts orders. Stay online for smooth operations.';
      case UserStatus.LastCall:
        return 'Ending soon? Ensure you complete pending orders.';
    }
  }, [type]);

  const primaryButtonType = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return ButtonType.green;
      case UserStatus.Offline:
        return ButtonType.red;
      case UserStatus.LastCall:
        return ButtonType.yellow;
    }
  }, [type]);

  const secondaryButtonType = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return ButtonType.red;
      case UserStatus.Offline:
        return ButtonType.green;
      case UserStatus.LastCall:
        return ButtonType.white;
    }
  }, [type]);

  const primaryButtonTitle = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return 'Turn on & Go Online';
      case UserStatus.Offline:
        return 'Go offline';
      case UserStatus.LastCall:
        return 'Confirm Last Call';
    }
  }, [type]);

  const secondaryButtonTitle = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return 'Later & Stay Offline';
      case UserStatus.Offline:
        return 'Stay Online';
      case UserStatus.LastCall:
        return 'Continue Orders';
    }
  }, [type]);

  const image = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return Images.OnlinePopup;
      case UserStatus.Offline:
        return Images.OfflinePopup;
      case UserStatus.LastCall:
        return Images.LastCallPopup;
    }
  }, [type]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <View style={styles.ring3}>
          <View style={styles.ring2}>
            <View style={styles.ring1}>
              <Image source={image} style={styles.image} />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Button
        style={{ marginBottom: 12 }}
        type={primaryButtonType}
        title={primaryButtonTitle}
        onPress={() => onAccept(type)}
      />
      <Button
        style={{ borderColor: Colors.gray4, borderWidth: 2 }}
        type={secondaryButtonType}
        title={secondaryButtonTitle}
        onPress={onCancel}
      />
    </View>
  );
};
