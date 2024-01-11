import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

export const useCameraPermission = (autoRequestPermission: boolean = false) => {
  const [cameraPermission, setCameraPermission] = useState<boolean>(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      const permission = await request(PERMISSIONS.IOS.CAMERA);
      if (permission === 'granted') {
        setCameraPermission(true);
      }
    }

    if (Platform.OS === 'android') {
      const permission = await request(PERMISSIONS.ANDROID.CAMERA);
      if (permission === 'granted') {
        setCameraPermission(true);
      }
    }
  };

  useEffect(() => {
    if (autoRequestPermission) {
      requestCameraPermission();
    }
  }, [autoRequestPermission]);

  return {
    requestCameraPermission,
    cameraPermission,
  };
};
