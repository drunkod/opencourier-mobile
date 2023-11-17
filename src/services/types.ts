import { Order, Pagination } from '@app/types/types';

export type LoginParams = {
  email: string;
  password: string;
  rememberLogin: boolean;
};

export type SignupParams = {
  email: string;
  password: string;
};

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
