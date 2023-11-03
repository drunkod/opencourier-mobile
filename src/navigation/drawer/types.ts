import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum DrawerScreens {
  Home = 'Home',
  Earnings = 'Earnings',
  PaymentMethods = 'PaymentMethods',
}

export type DrawerStackParamList = {
  Home: undefined;
  Earnings: undefined;
  PaymentMethods: undefined;
};

export type DrawerNavigationProp = NavigationProp<DrawerStackParamList>;
export type DrawerRouteProp<T extends DrawerScreens> = RouteProp<
  DrawerStackParamList,
  T
>;
export type DrawerScreenProp<T extends DrawerScreens> = {
  navigation: DrawerNavigationProp;
  route: DrawerRouteProp<T>;
};
