import React, { useEffect, useState } from 'react';
import { Router } from '@app/navigation/router';
import { NavigationContainer } from '@react-navigation/native';
import UserContext from '@app/context/userContext';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const [watchId, setWatchId] = useState<number | undefined>(undefined);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        watchId,
        setWatchId,
        locationPermission,
        setLocationPermission,
      }}>
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    </UserContext.Provider>
  );
};

export default App;
