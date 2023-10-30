import React from 'react';
import { DrawerScreens } from './types';
import { HomeScreen } from '@app/screens/Home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideMenu } from '@app/screens/SideMenu/SideMenu';
import { Earnings } from '@app/screens/Earnings/Earnings';

const DrawerNavigator = createDrawerNavigator();

const DEFAULT_OPTIONS = { headerShown: false };

export const DrawerStack = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName={DrawerScreens.Home}
      drawerContent={props => <SideMenu {...props} />}>
      <DrawerNavigator.Screen
        name={DrawerScreens.Home}
        component={HomeScreen}
        options={DEFAULT_OPTIONS}
      />
      <DrawerNavigator.Screen
        name={DrawerScreens.Earnings}
        component={Earnings}
        options={DEFAULT_OPTIONS}
      />
    </DrawerNavigator.Navigator>
  );
};
