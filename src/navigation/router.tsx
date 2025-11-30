import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreen, RootStackParamList } from '@app/navigation/types';
import { LoadingScreen } from '@app/screens/Loading/Loading';
import { PasskeyLoginScreen } from '@app/screens/Auth/PasskeyLoginScreen';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { useJazzAuth } from '@app/providers/JazzAuthProvider';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const DEFAULT_OPTIONS = { headerShown: false };

export const Router = () => {
  const { isAuthenticated, isLoading } = useJazzAuth();

  if (isLoading) {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name={RootScreen.Loading}
          component={LoadingScreen}
          options={DEFAULT_OPTIONS}
        />
      </RootStack.Navigator>
    );
  }

  return (
    <RootStack.Navigator>
      {!isAuthenticated ? (
        <RootStack.Screen
          name={RootScreen.PasskeyLogin}
          component={PasskeyLoginScreen}
          options={DEFAULT_OPTIONS}
        />
      ) : (
        <RootStack.Screen
          name={RootScreen.Main}
          component={AuthenticatedRouter}
          options={DEFAULT_OPTIONS}
        />
      )}
    </RootStack.Navigator>
  );
};
