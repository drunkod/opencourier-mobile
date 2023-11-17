import { Order } from '@app/types/types';
import { RootState } from '@app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  acceptOrder,
  declineOrder,
  getInProgressOrders,
  getNewOrders,
  getOrderHistory,
} from '@app/redux/order/order';
import { useEffect, useState } from 'react';
import { AUTO_ACCEPT_DECLINE_TIMER } from '@app/utilities/constants';
import { getAutoAcceptOrdersStorage } from '@app/utilities/storage';

type NewOrderTimer = {
  secondsRemaining: number;
  orderId: string;
};

export const useHomeOrders = () => {
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(false);
  const [newOrdersTimers, setNewOrdersTimers] = useState<NewOrderTimer[]>([]);
  const [dataSourceHistory, setDataSourceHistory] = useState<Order[]>([]);
  const [dataSourceNew, setDataSourceNew] = useState<Order[]>([]);
  const [dataSourceInProgress, setDataSourceInProgress] = useState<Order[]>([]);
  const dispatch = useDispatch();
  const {
    newOrders,
    getNewOrdersFinished,
    getNewOrdersError,
    inProgressOrders,
    getInProgressOrdersFinished,
    getInProgressOrdersError,
    orderHistory,
    getOrderHistoryFinished,
    getOrderHistoryError,
    acceptOrderFinished,
    acceptOrderError,
    declineOrderFinished,
    declineOrderError,
  } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    const id = setInterval(() => {
      if (newOrdersTimers.length > 0) {
        var timers = [...newOrdersTimers];
        const timersNew: (NewOrderTimer | undefined)[] = timers.map(obj => {
          if (obj !== undefined) {
            const secsRemaining = obj.secondsRemaining - 1;
            if (secsRemaining > -1) {
              return {
                orderId: obj.orderId,
                secondsRemaining: secsRemaining,
              };
            } else {
              const array = newOrders?.filter(temp => temp.id === obj.orderId);
              if (array && array.length > 0) {
                if (autoAcceptOrders) {
                  dispatch(acceptOrder(array[0]));
                } else {
                  dispatch(declineOrder(array[0]));
                }
              }
              return undefined;
            }
          }
        });
        const newTimers: NewOrderTimer[] = timersNew.filter(
          obj => obj !== undefined,
        );
        setNewOrdersTimers(newTimers);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    if (getNewOrdersFinished) {
      if (!getNewOrdersError) {
        if (newOrders !== undefined) {
          var timersToAdd: NewOrderTimer[] = [];
          newOrders.forEach(order => {
            if (
              newOrdersTimers.filter(timer => timer.orderId === order.id)
                .length === 0
            ) {
              timersToAdd = [
                ...timersToAdd,
                {
                  orderId: order.id,
                  secondsRemaining: AUTO_ACCEPT_DECLINE_TIMER / 1000,
                },
              ];
            }
          });
          setNewOrdersTimers([...newOrdersTimers, ...timersToAdd]);
          setDataSourceNew(newOrders);
        }
      }
    }
  }, [newOrders, getNewOrdersError, getNewOrdersFinished]);

  useEffect(() => {
    if (getInProgressOrdersFinished) {
      if (!getInProgressOrdersError) {
        if (inProgressOrders !== undefined) {
          setDataSourceInProgress(inProgressOrders);
        }
      }
    }
  }, [inProgressOrders, getInProgressOrdersError, getInProgressOrdersFinished]);

  useEffect(() => {
    if (getOrderHistoryFinished) {
      if (!getOrderHistoryError) {
        if (orderHistory !== undefined) {
          setDataSourceHistory(orderHistory);
        }
      }
    }
  }, [orderHistory, getOrderHistoryError, getOrderHistoryFinished]);

  useEffect(() => {
    if (declineOrderFinished) {
      if (!declineOrderError) {
        fetchNewOrders();
        fetchInProgressOrders();
      }
    }
  }, [declineOrderError, declineOrderFinished]);

  useEffect(() => {
    if (acceptOrderFinished) {
      if (!acceptOrderError) {
        fetchNewOrders();
        fetchInProgressOrders();
      }
    }
  }, [acceptOrderError, acceptOrderFinished]);

  const fetchNewOrders = () => {
    dispatch(getNewOrders({ status: 'new', perPage: 10, page: 1 }));
  };

  const fetchInProgressOrders = () => {
    dispatch(
      getInProgressOrders({ status: 'in_progress', perPage: 10, page: 1 }),
    );
  };

  const fetchHistory = () => {
    dispatch(getOrderHistory({ status: 'completed', perPage: 10, page: 1 }));
  };

  useEffect(() => {
    fetchNewOrders();
    fetchInProgressOrders();
    fetchHistory();
    (async () => {
      const accept = await getAutoAcceptOrdersStorage();
      setAutoAcceptOrders(accept);
    })();
  }, []);

  return {
    dataSourceNew,
    dataSourceHistory,
    dataSourceInProgress,
    newOrdersTimers,
    getNewOrdersFinished,
    getInProgressOrdersFinished,
    getOrderHistoryFinished,
    fetchNewOrders,
    fetchInProgressOrders,
    fetchHistory,
  };
};
