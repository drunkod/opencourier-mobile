import notifee, { AndroidImportance } from '@notifee/react-native';
import usePushNotifications from './usePushNotifications';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging/';
import { ANDROID_CHANNEL_ID } from '@app/utilities/constants';
import { Colors } from '@app/styles/colors';

export const onMessageReceived = async (
  message: FirebaseMessagingTypes.RemoteMessage,
) => {
  const data = message.data;
  await notifee.displayNotification({
    title: message.notification?.title,
    body: message.notification?.body,
    data: data,
    android: {
      color: Colors.red1,
      // smallIcon: 'ic_notification',
      channelId: ANDROID_CHANNEL_ID,
      importance: AndroidImportance.HIGH,
      pressAction: {
        id: 'default',
      },
    },
  });
};

export default usePushNotifications;
