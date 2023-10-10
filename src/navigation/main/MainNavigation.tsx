import React from 'react';
import { MainScreens } from './types';
import { HomeScreen } from '@app/screens/Home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideMenu } from '@app/screens/SideMenu/SideMenu';

const MainStackNavigator = createDrawerNavigator();

const DEFAULT_OPTIONS = { headerShown: false };

export const MainStack = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName={MainScreens.Home}
      drawerContent={props => <SideMenu {...props} />}>
      <MainStackNavigator.Screen
        name={MainScreens.Home}
        component={HomeScreen}
        options={DEFAULT_OPTIONS}
      />
    </MainStackNavigator.Navigator>
  );
};
