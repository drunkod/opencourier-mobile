import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum RootScreen {
  Loading = 'Loading',
  Onboarding = 'Onboarding',
  Main = 'Main',
}

export type RootStackParamList = {
  Loading: undefined;
  Onboarding: undefined;
  Main: undefined;
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
