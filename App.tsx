import './src/polyfills';
import React, { useState } from 'react';
import { Router } from '@app/navigation/router';
import { NavigationContainer } from '@react-navigation/native';
import UserContext from '@app/context/userContext';
import { JazzProvider } from 'jazz-react-native';
import { useJazzInit } from './src/hooks/useJazzInit';

if (__DEV__) {
  require('./ReactotronConfig');
}



const App = () => {
  const [watchId, setWatchId] = useState<number | undefined>(undefined);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  // Initialize Jazz account data
  useJazzInit();

  return (
    <JazzProvider
      sync={{
        peer: 'wss://cloud.jazz.tools/?key=demo@example.com',
        when: 'always',
      }}
    >
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
    </JazzProvider>
  );
};

export default App;
