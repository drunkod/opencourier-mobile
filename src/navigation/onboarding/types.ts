import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum OnboardingScreen {
  Landing = 'Landing',
  Welcome = 'Welcome',
  Login = 'Login',
  Signup = 'Signup',
}

export type OnboardingStackParamList = {
  Landing: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
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
