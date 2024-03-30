import { Order, User } from '@app/types/types';
import { UClient } from './Client';
import { TEST_NEW_ORDERS, TEST_ORDERS_HISTORY } from '@app/utilities/testData';
import {
  GetOrdersParams,
  GetOrdersReponse,
  NewOrdersParams,
  OrderServiceParams,
  OrderServiceReponse,
} from './types';
import { OrderSetting, OrderStatus } from '@app/types/enums';
import { courierToUser, offerToOrder } from './utils';

export interface OrderService {
  getNewOrders: (params: NewOrdersParams) => Promise<OrderServiceReponse>;
  getInProgressOrders: (
    params: OrderServiceParams,
  ) => Promise<OrderServiceReponse>;
  getOrdersHistory: (
    params: OrderServiceParams,
  ) => Promise<OrderServiceReponse>;
  acceptOrder: (params: OrderServiceParams) => Promise<OrderServiceReponse>;
  declineOrder: (params: OrderServiceParams) => Promise<OrderServiceReponse>;
  confirmItems: (order: Order) => Promise<Order | undefined>;
  markAsDelivered: (
    order: Order,
    photos: string[],
    tags: string[],
  ) => Promise<Order | undefined>;
}

const orderService = (client: UClient): OrderService => {
  const getNewOrders = async (
    params: NewOrdersParams,
  ): Promise<OrderServiceReponse> => {
    console.log("Get new order params", params)
    return client
      .post('/offers/', {
        excludedIds: params.excludedIds,
        includeMerchant: true,
      })
      .then(res => {
        const offers: any[] = res.data.offers;
        console.log('fetched offers', offers);
        const orders: Order[] = offers.map(offer => offerToOrder(offer));
        return { data: orders, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const getInProgressOrders = async (
    params: OrderServiceParams,
  ): Promise<OrderServiceReponse> => {
    console.log("Get in progress orders params", params)
    return await client
      .post('/deliveries/', {
        courierIds: [params.data.courierId],
        statuses: [OrderStatus.dispatched, OrderStatus.picked_up],
        includeMerchant: true,
      })
      .then(res => {
        const deliveries: any[] = res.data.deliveries;
        console.log('fetched in progress orders', deliveries);
        const orders: Order[] = deliveries.map(delivery => offerToOrder(delivery));
        return { data: orders, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const getOrdersHistory = async (
    params: OrderServiceParams,
  ): Promise<OrderServiceReponse> => {
    console.log('Get orders history params', params);
    return await client
      .post('/deliveries/', {
        courierIds: [params.data.courierId],
        statuses: [OrderStatus.dropped_off],
        includeMerchant: true,
      })
      .then(res => {
        const deliveries: any[] = res.data.deliveries;
        console.log('fetched completed orders', deliveries);
        const orders: Order[] = deliveries.map(delivery =>
          offerToOrder(delivery),
        );
        return { data: orders, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const acceptOrder = async (params: OrderServiceParams): Promise<OrderServiceReponse> => {
    console.log('Accept order params', params);
    return client
      .post(`/offers/accept/${params.id}`, {
        courierId: params.data.courierId,
      })
      .then(() => {
        console.log('Order accepted successfully');
        return { data: null, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const declineOrder = async (
    params: OrderServiceParams,
  ): Promise<OrderServiceReponse> => {
    console.log("Decline order params", params);
    return client
      .post(`/offers/reject/${params.id}`, {
        courierId: params.data.courierId,
      })
      .then((res) => {
        const courier = res.data.courier;
        console.log('Order declined successfully');
          const user: User = courierToUser(courier);

          return { data: user, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const confirmItems = async (order: Order): Promise<Order> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, order);
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
