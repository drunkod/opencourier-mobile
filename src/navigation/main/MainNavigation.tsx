import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreens, MainStackParamList } from './types';
import { HomeScreen } from '@app/screens/Home/Home';

const MainStackNavigator = createNativeStackNavigator<MainStackParamList>();

const DEFAULT_OPTIONS = { headerShown: false };

export const MainStack = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name={MainScreens.Home}
        component={HomeScreen}
        options={DEFAULT_OPTIONS}
      />
    </MainStackNavigator.Navigator>
  );
};
