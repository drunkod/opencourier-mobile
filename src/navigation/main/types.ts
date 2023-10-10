import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum MainScreens {
  Home = 'Home',
}

export type MainStackParamList = {
  Home: undefined;
};

export type MainNavigationProp = NavigationProp<MainStackParamList>;
export type MainRouteProp<T extends MainScreens> = RouteProp<
  MainStackParamList,
  T
>;
export type MainScreenProp<T extends MainScreens> = {
  navigation: MainNavigationProp;
  route: MainRouteProp<T>;
};
