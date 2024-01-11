import { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

export const useLocationPermission = (
  autoRequestPermission: boolean = false,
) => {
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  const requestLocationPermission = async () => {
    const permission = await Geolocation.requestAuthorization('whenInUse');
    if (permission === 'granted') {
      setLocationPermission(true);
    }
  };

  useEffect(() => {
    if (autoRequestPermission) {
      requestLocationPermission();
    }
  }, [autoRequestPermission]);

  return {
    requestLocationPermission,
    locationPermission,
  };
};
