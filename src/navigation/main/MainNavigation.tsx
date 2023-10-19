import React from 'react';
import { MainScreens } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerStack } from '../drawer/DrawerNavigation';
import { ItemsCollected } from '@app/screens/ItemsCollected/ItemsCollected';

const MainStackNavigator = createNativeStackNavigator();

const DEFAULT_OPTIONS = { headerShown: false };

export const MainStack = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName={MainScreens.Drawer}>
      <MainStackNavigator.Screen
        name={MainScreens.Drawer}
        component={DrawerStack}
        options={DEFAULT_OPTIONS}
      />
      <MainStackNavigator.Screen
        name={MainScreens.ItemsCollected}
        component={ItemsCollected}
        options={DEFAULT_OPTIONS}
      />
    </MainStackNavigator.Navigator>
  );
};
