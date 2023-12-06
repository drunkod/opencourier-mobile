import {
  TEST_API_NEW_ORDER,
  TEST_ORDERS_HISTORY,
} from '@app/utilities/testData';
import { GetOrdersParams } from './types';
//@ts-ignore

export interface DemoClientInterface {
  get: (path: string, params: any) => Promise<any>;
}

export const DemoClient = (): DemoClientInterface => {
  const get = async (path: string, params: GetOrdersParams) => {
    // if (params.status === 'new') {
    //   return new Promise(function (resolve) {
    //     setTimeout(resolve, 500, {
    //       deliveries: [TEST_API_NEW_ORDER],
    //       pagination: {
    //         total: 1,
    //         lastPage: 1,
    //         currentPage: 1,
    //         perPage: 1,
    //         prevPage: 1,
    //         nextPage: 1,
    //       },
    //     });
    //   });
    // }

    if (params.params.status === 'in_progress') {
      return new Promise(function (resolve) {
        setTimeout(resolve, 500, {
          data: {
            deliveries: [TEST_API_NEW_ORDER],
            pagination: {
              total: 1,
              lastPage: 1,
              currentPage: 1,
              perPage: 1,
              prevPage: 1,
              nextPage: 1,
            },
          },
        });
      });
    }
    if (params.params.status === 'completed') {
      return new Promise(function (resolve) {
        setTimeout(resolve, 500, {
          data: {
            deliveries: TEST_ORDERS_HISTORY,
            pagination: {
              total: 3,
              lastPage: 1,
              currentPage: 1,
              perPage: 10,
              prevPage: 1,
              nextPage: 1,
            },
          },
        });
      });
    }
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, []);
    });
  };

  return { get };
};
