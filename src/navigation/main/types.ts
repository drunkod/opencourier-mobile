import { Order, OrderItem } from '@app/types/types';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export enum MainScreens {
  Drawer = 'Drawer',
  ItemsCollected = 'Items Collected',
  MarkAsDelivered = 'MarkAsDelivered',
  PhotoAttachment = 'PhotoAttachment',
  PayoutActivity = 'PayoutActivity',
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
