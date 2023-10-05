import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum OnboardingScreen {
  Landing = 'Landing',
  Welcome = 'Welcome',
}

export type OnboardingStackParamList = {
  Landing: undefined;
  Welcome: undefined;
};

export type OnboardingNavigationProp = NavigationProp<OnboardingStackParamList>;
export type OnboardingRouteProp<T extends OnboardingScreen> = RouteProp<
  OnboardingStackParamList,
  T
>;
export type OnboardingScreenProp<T extends OnboardingScreen> = {
  navigation: OnboardingNavigationProp;
  route: OnboardingRouteProp<T>;
};
