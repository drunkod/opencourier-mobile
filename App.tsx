import './src/polyfills';
import React, { useState } from 'react';
import { Router } from '@app/navigation/router';
import { NavigationContainer } from '@react-navigation/native';
import UserContext from '@app/context/userContext';
import { JazzAuthProvider } from './src/providers/JazzAuthProvider';

if (__DEV__) {
  require('./ReactotronConfig');
}



const App = () => {
  const [watchId, setWatchId] = useState<number | undefined>(undefined);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  return (
    <JazzAuthProvider>
      <UserContext.Provider
        value={{
          watchId,
          setWatchId,
          locationPermission,
          setLocationPermission,
        }}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </UserContext.Provider>
    </JazzAuthProvider>
  );
};

export default App;
