import React, { useMemo } from 'react';
import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './StatusPopup.styles';
import { UserStatus } from '@app/types/types';
import { Button, ButtonType } from '../Button/Button';
import { Images } from '@app/utilities/images';
import { Colors } from '@app/styles/colors';
import { useTranslation } from 'react-i18next';

type Props = {
  style?: StyleProp<ViewStyle>;
  type: UserStatus;
  onAccept: (status: UserStatus) => void;
  onCancel: () => void;
};

export const StatusPopup = ({ style, type, onAccept, onCancel }: Props) => {
  const { t } = useTranslation();
  const title = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return t('translations:going_online');
      case UserStatus.Offline:
        return t('translations:going_offline');
      case UserStatus.LastCall:
        return t('translations:going_last_call');
    }
  }, [type]);

  const subtitle = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return t('translations:please_turn_on_location');
      case UserStatus.Offline:
        return t('translations:switching_disrupts_orders');
      case UserStatus.LastCall:
        return t('translations:ending_soon');
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
        return t('translations:on_and_go_online');
      case UserStatus.Offline:
        return t('translations:go_offline');
      case UserStatus.LastCall:
        return t('translations:confirm_last_call');
    }
  }, [type]);

  const secondaryButtonTitle = useMemo(() => {
    switch (type) {
      case UserStatus.Online:
        return t('translations:later_stay_offline');
      case UserStatus.Offline:
        return t('translations:stay_online');
      case UserStatus.LastCall:
        return t('translations:continue_orders');
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
