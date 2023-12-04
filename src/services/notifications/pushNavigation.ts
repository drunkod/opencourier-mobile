import { MainScreens } from '@app/navigation/main/types';
import { Platform } from 'react-native';

const navigate = (navigation: any, notificationData: any) => {
  const key =
    Platform.OS === 'android'
      ? notificationData?.data?.code
      : notificationData?.code;

  const data =
    Platform.OS === 'android' ? notificationData?.data : notificationData;

  if (key === '') {
    navigation.navigate(MainScreens.Drawer);
  }
};

export default navigate;
