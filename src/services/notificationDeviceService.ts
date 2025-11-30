// Legacy service - Client was removed during Jazz Tools migration
// import { UClient } from './Client';

export interface NotificationDeviceService {
  addDeviceApi: () => Promise<void>;
  removeDeviceApi: () => Promise<void>;
  getNotificationApi: () => Promise<void>;
  getNotificationCountApi: () => Promise<void>;
}

const NotificationDeviceService = (
  client?: any, // Client parameter optional after migration
): NotificationDeviceService => {
  const addDeviceApi = async (): Promise<void> => {
    return new Promise(function (resolve) {
      setTimeout(resolve, 500);
    });
  };

  const removeDeviceApi = async (): Promise<void> => {
    return new Promise(function (resolve) {
      setTimeout(resolve, 500);
    });
  };

  const getNotificationApi = async (): Promise<void> => {
    return new Promise(function (resolve) {
      setTimeout(resolve, 500);
    });
  };

  const getNotificationCountApi = async (): Promise<void> => {
    return new Promise(function (resolve) {
      setTimeout(resolve, 500);
    });
  };

  return {
    addDeviceApi,
    removeDeviceApi,
    getNotificationApi,
    getNotificationCountApi,
  };
};

export default NotificationDeviceService;
