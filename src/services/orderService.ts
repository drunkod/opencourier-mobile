import { Order } from '@app/types/types';
import { UClient } from './Client';
import { TEST_NEW_ORDERS, TEST_ORDERS_HISTORY } from '@app/utilities/testData';
import { GetOrdersParams, GetOrdersReponse } from './types';

export interface OrderService {
  getNewOrders: (
    params: GetOrdersParams,
  ) => Promise<GetOrdersReponse | undefined>;
  getInProgressOrders: (
    params: GetOrdersParams,
  ) => Promise<GetOrdersReponse | undefined>;
  getOrdersHistory: (
    params: GetOrdersParams,
  ) => Promise<GetOrdersReponse | undefined>;
  acceptOrder: (order: Order) => Promise<Order | undefined>;
  declineOrder: (order: Order) => Promise<Order | undefined>;
  confirmItems: (order: Order) => Promise<Order | undefined>;
  markAsDelivered: (
    order: Order,
    photos: string[],
    tags: string[],
  ) => Promise<Order | undefined>;
}

const orderService = (client: UClient): OrderService => {
  const getNewOrders = async (
    params: GetOrdersParams,
  ): Promise<GetOrdersReponse> => {
    const { data } = await client.get<GetOrdersReponse>('deliveries', {
      params,
    });
    return data;
  };

  const getInProgressOrders = async (
    params: GetOrdersParams,
  ): Promise<GetOrdersReponse> => {
    const { data } = await client.get<GetOrdersReponse>('deliveries', {
      params,
    });
    return data;
  };

  const getOrdersHistory = async (
    params: GetOrdersParams,
  ): Promise<GetOrdersReponse> => {
    const { data } = await client.get<GetOrdersReponse>('deliveries', {
      params,
    });
    return data;
  };

  const acceptOrder = async (order: Order): Promise<Order> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_NEW_ORDERS[0]);
    });
  };

  const declineOrder = async (order: Order): Promise<Order> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_NEW_ORDERS[0]);
    });
  };

  const confirmItems = async (order: Order): Promise<Order> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_NEW_ORDERS[0]);
    });
  };

  const markAsDelivered = async (
    order: Order,
    photos: string[],
    tags: string[],
  ): Promise<Order> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_NEW_ORDERS[0]);
    });
  };

  return {
    getNewOrders,
    getOrdersHistory,
    getInProgressOrders,
    acceptOrder,
    confirmItems,
    markAsDelivered,
    declineOrder,
  };
};

export default orderService;
