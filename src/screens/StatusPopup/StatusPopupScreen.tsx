import React from 'react';
import { View } from 'react-native';
import { RootScreen, RootScreenProp } from '@app/navigation/types';
import { styles } from './StatusPopupScreen.styles';
import { StatusPopup } from '@app/components/StatusPopup/StatusPopup';
import { UserStatus } from '@app/types/types';

type Props = RootScreenProp<RootScreen.UserStatusModal>;

export const StatusPopupScreen = ({ navigation, route }: Props) => {
  const { status, onAccept, onCancel } = route.params;

  const handleAccept = (userStatus: UserStatus) => {
    onAccept(userStatus);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusPopup
        type={status}
        onAccept={handleAccept}
        onCancel={handleCancel}
      />
    </View>
  );
};
