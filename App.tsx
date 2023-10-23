import React, { useEffect, useState } from 'react';
import { Router } from '@app/navigation/router';
import { NavigationContainer } from '@react-navigation/native';
import { User } from '@app/types/types';
import Geolocation from 'react-native-geolocation-service';
import UserContext from '@app/context/userContext';

const App = () => {
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (locationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setUser({
            address: '',
            firstname: '',
            lastname: '',
            profilePictureUrl: '',
            location: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
          });
        },
        error => {
          console.warn('Location error: ', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    }
  }, [locationPermission]);

  useEffect(() => {
    const getPermissions = async () => {
      const permission = await Geolocation.requestAuthorization('whenInUse');
      if (permission === 'granted') {
        setLocationPermission(true);
      }
    };
    getPermissions();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
