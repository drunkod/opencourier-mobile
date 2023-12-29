import { Order, OrderItem } from '@app/types/types';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum MainScreens {
  Drawer = 'Drawer',
  ItemsCollected = 'Items Collected',
  MarkAsDelivered = 'MarkAsDelivered',
  PhotoAttachment = 'PhotoAttachment',
  PayoutActivity = 'PayoutActivity',
  Licences = 'Licences',
  LanguageScreen = 'LanguageScreen',
  ThemeScreen = 'ThemeScreen',
  OperatingArea = 'operatingArea',
  Accessibility = 'Accessibility',
  DefaultSound = 'DefaultSound',
  MyLanguages = 'MyLanguages',
  VolumeScreen = 'VolumeScreen',
  EmergencyContact = 'EmergencyContact',
  NavigationScreen = 'NavigationScreen',
  VehicleTypeScreen = 'VehicleTypeScreen',
  RestaurantTypeScreen = 'RestaurantTypeScreen',
  CuisineTypeScreen = 'CuisineTypeScreen',
  EarningsMethodScreen = 'EarningsMethodScreen',
  WeightOrderScreen = 'WeightOrderScreen',
  OrderPreferenceScreen = 'OrderPreferenceScreen',
  ShiftAvailabilityScreen = 'ShiftAvailabilityScreen',
}

export type MainStackParamList = {
  Drawer: undefined;
  ItemsCollected: {
    order: Order;
  };
  MarkAsDelivered: {
    items: OrderItem[];
  };
  PhotoAttachment: {
    onAttach: (photo: string) => void;
  };
  PayoutActivity: undefined;
  Licences: undefined;
  VehicleTypeScreen: undefined;
  RestaurantTypeScreen: undefined;
  CuisineTypeScreen: undefined;
  EarningsMethodScreen: undefined;
  WeightOrderScreen: undefined;
  OrderPreferenceScreen: undefined;
  ShiftAvailabilityScreen: undefined;
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
