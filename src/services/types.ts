import { OrderSetting } from '@app/types/enums';
import { Order, Pagination, Setting, UserStatus } from '@app/types/types';
import { Point } from 'geojson';

export type LoginParams = {
  email: string;
  password: string;
  rememberLogin?: boolean;
};

export type SignupParams = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type UserParams = {
  id: string;
  data?: { orderSetting: OrderSetting } | { status: UserStatus } | { currentLocation: Point| null };
}

export type SettingsParams = {
  id: string;
  settings?: Setting;
}

export type UserServiceResponse = {
  data: any;
  error: any;
}

export type MarkAsDeliveredParams = {
  order: Order;
  photos: string[];
  tags: string[];
};

export type GetOrdersParams = {
  status: 'in_progress' | 'completed' | 'new';
  page: number;
  perPage: number;
};

export type GetOrdersReponse = {
  deliveries: Order[];
  pagination: Pagination;
};
