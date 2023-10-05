import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum RootScreen {
  Loading = 'Loading',
}

export type RootStackParamList = {
  Loading: undefined;
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;

export type RootRouteProp<T extends RootScreen> = RouteProp<
  RootStackParamList,
  T
>;

export type RootScreenProp<T extends RootScreen> = {
  navigation: RootNavigationProp;
  route: RootRouteProp<T>;
};
