import { OrderItem } from '@app/types/types';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

export enum MainScreens {
  Drawer = 'Drawer',
  ItemsCollected = 'Items Collected',
  MarkAsDelivered = 'MarkAsDelivered',
  PhotoAttachment = 'PhotoAttachment',
}

export type MainStackParamList = {
  Drawer: undefined;
  ItemsCollected: {
    items: OrderItem[];
  };
  MarkAsDelivered: {
    items: OrderItem[];
  };
  PhotoAttachment: {
    onAttach: (photo: string) => void;
  };
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
