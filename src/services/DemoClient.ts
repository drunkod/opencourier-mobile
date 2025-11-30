// Legacy demo client - not used with Jazz Tools
import { GetOrdersParams } from './types';

// Mock test data - exports removed from testData
const TEST_API_NEW_ORDER = {} as any;
const TEST_ORDERS_HISTORY = [] as any[];

export interface DemoClientInterface {
  get: (path: string, params: any) => Promise<any>;
}

export const DemoClient = (): DemoClientInterface => {
  const get = async (path: string, params: GetOrdersParams) => {
    // Legacy implementation - kept for backward compatibility
    // @ts-ignore - params structure varies
    if (params.status === 'in_progress' || params.params?.status === 'in_progress') {
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
    // @ts-ignore - params structure varies
    if (params.status === 'completed' || params.params?.status === 'completed') {
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
