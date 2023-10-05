import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreen, RootStackParamList } from '@app/navigation/types';
import { LoadingScreen } from '@app/screens/Loading';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const DEFAULT_OPTIONS = { headerShown: false };

export const Router = () => {
  return (
    <RootStack.Navigator initialRouteName="Loading">
      <RootStack.Screen
        name={RootScreen.Loading}
        component={LoadingScreen}
        options={DEFAULT_OPTIONS}
      />
    </RootStack.Navigator>
  );
};
