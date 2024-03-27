import React, { useEffect, useState } from 'react';
import { Router } from '@app/navigation/router';
import { NavigationContainer } from '@react-navigation/native';
import { Coordinates, User } from '@app/types/types';
import Geolocation from 'react-native-geolocation-service';
import UserContext from '@app/context/userContext';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';
import { useLocationPermission } from '@app/hooks/useLocationPermission';
import { Point } from 'geojson';
import { selectUser, updateCurrentLocation } from '@app/redux/user/user';
import { track } from '@app/utilities/geo';

const App = () => {
  const [watchId, setWatchId] = useState<number | undefined>(undefined);

  return (
    <UserContext.Provider value={{ watchId, setWatchId }}>
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    </UserContext.Provider>
  );
};

export default App;
