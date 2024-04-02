import { ConfirmItemsCheck, Order } from '@app/types/types';
import { RootState } from '@app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  acceptOrder,
  declineOrder,
  getInProgressOrders,
  getNewOrders,
  getOrderHistory,
  selectOrder,
} from '@app/redux/order/order';
import { useEffect, useState } from 'react';
import { AUTO_ACCEPT_DECLINE_TIMER } from '@app/utilities/constants';
import { getAutoAcceptOrdersStorage } from '@app/utilities/storage';
import { selectUser } from '@app/redux/user/user';
import { OrderSetting } from '@app/types/enums';
import {
  selectComment,
} from '@app/redux/comment/comment';

type NewOrderTimer = {
  secondsRemaining: number;
  orderId: string;
};

class Timer {
  started: Date;
  callback: () => void;
  delay: number;
  id: NodeJS.Timeout;

  constructor(callback: () => void, delay: number) {
    this.callback = callback;
    this.delay = delay;
    this.started = new Date();
    this.id = setTimeout(this.callback, this.delay);
  }

  stop() {
    clearTimeout(this.id);
  }

  getTimeLeftMilli() {
    return this.started ? this.started.valueOf() + this.delay - Date.now() : 0;
  }
}

export const useHomeOrders = () => {
  const [confirmedItems, setConfirmedItems] = useState<ConfirmItemsCheck[]>([]);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(false);
  const [newOrdersTimers, setNewOrdersTimers] = useState<NewOrderTimer[]>([]);
  const [dataSourceHistory, setDataSourceHistory] = useState<Order[]>([]);
  const [dataSourceNew, setDataSourceNew] = useState<Order[]>([]);
  const [dataSourceInProgress, setDataSourceInProgress] = useState<Order[]>([]);

  const [offerExpirationTimers, setOfferExpirationTimers] = useState<
    Map<string, Timer>
  >(new Map());
  const { user } = useSelector(selectUser);
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
    confirmItemsFinished,
    confirmItemsError,
    confirmedItemsForOrder,
  } = useSelector(selectOrder);

  const {
    createCommentFinished,
    updateCommentFinished,
    deleteCommentFinished,
  } = useSelector(selectComment);

  const itemsConfirmedForOrder = (order: Order) => {
    const temp = confirmedItems.filter(obj => obj.orderId === order.id);
    if (temp.length > 0) {
      return temp[0].confirmedItems;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     if (newOrdersTimers.length > 0) {
  //       var timers = [...newOrdersTimers];
  //       const timersNew: (NewOrderTimer | undefined)[] = timers.map(obj => {
  //         if (obj !== undefined) {
  //           const secsRemaining = obj.secondsRemaining - 1;
  //           if (secsRemaining > -1) {
  //             return {
  //               orderId: obj.orderId,
  //               secondsRemaining: secsRemaining,
  //             };
  //           } else {
  //             const array = newOrders?.filter(temp => temp.id === obj.orderId);
  //             if (array && array.length > 0) {
  //               if (autoAcceptOrders) {
  //                 dispatch(acceptOrder(array[0]));
  //               } else {
  //                 dispatch(declineOrder(array[0]));
  //               }
  //             }
  //             return undefined;
  //           }
  //         }
  //       });
  //       const newTimers: NewOrderTimer[] = timersNew.filter(
  //         obj => obj !== undefined,
  //       );
  //       setNewOrdersTimers(newTimers);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(id);
  //   };
  // });
  const acceptOrderFn = (orderId: string) => {
    console.log('Dispatching accept order', orderId);
    offerExpirationTimers.get(orderId)?.stop();
    offerExpirationTimers.delete(orderId);
    dispatch(acceptOrder({ id: orderId, data: { courierId: user!.id } }));
    const updateNewOrders = newOrders!.filter(
      newOrder => newOrder.id != orderId,
    );
    setDataSourceNew(updateNewOrders);
  };
  //dispatch(acceptOrder({ id, data: { courierId: user!.id } }));

  const declineOrderFn = (orderId: string) => {
    console.log('Dispatching decline order', orderId);
    offerExpirationTimers.get(orderId)?.stop();
    offerExpirationTimers.delete(orderId);
    dispatch(declineOrder({ id: orderId, data: { courierId: user!.id } }));
    const updateNewOrders = newOrders!.filter(
      newOrder => newOrder.id != orderId,
    );
    setDataSourceNew(updateNewOrders);
  };

  useEffect(() => {
    if (getNewOrdersFinished) {
      if (!getNewOrdersError) {
        if (newOrders !== undefined) {
          const newOfferExpirationTimers = new Map(offerExpirationTimers);
          newOrders.forEach(order =>
            newOfferExpirationTimers.set(
              order.id,
              new Timer(
                () =>
                  user!.orderSetting == OrderSetting.auto_accept
                    ? acceptOrderFn(order.id)
                    : declineOrderFn(order.id),
                AUTO_ACCEPT_DECLINE_TIMER,
              ),
            ),
          );
          setOfferExpirationTimers(newOfferExpirationTimers);
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
  }, [inProgressOrders, getInProgressOrdersFinished]);

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
    dispatch(getNewOrders({ excludedIds: user!.rejectedOrders }));
  };

  const fetchInProgressOrders = () => {
    dispatch(getInProgressOrders({ data: { courierId: user!.id } }));
  };

  const fetchHistory = () => {
    console.log('dispatching fetch history');
    dispatch(getOrderHistory({ data: { courierId: user!.id } }));
  };

  useEffect(() => {
    if (confirmItemsFinished) {
      if (!confirmItemsError) {
        if (confirmedItemsForOrder !== undefined) {
          var rest = confirmedItems.filter(
            obj => obj.orderId !== confirmedItemsForOrder.id,
          );
          rest.push({
            orderId: confirmedItemsForOrder.id,
            confirmedItems: true,
          });
          // console.warn('HERE!!!: ', confirmedItemsForOrder);
          setConfirmedItems(rest);
        }
      }
    }
  }, [confirmItemsError, confirmItemsFinished, confirmedItemsForOrder]);

  useEffect(() => {
    fetchNewOrders();
    fetchInProgressOrders();
    fetchHistory();
    // (async () => {
    //   const accept = await getAutoAcceptOrdersStorage();
    //   setAutoAcceptOrders(accept);
    // })();
  }, []);

  useEffect(() => {
    fetchInProgressOrders();
  }, [createCommentFinished, updateCommentFinished, deleteCommentFinished]);

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
    itemsConfirmedForOrder,
    offerExpirationTimers,
    setOfferExpirationTimers,
    confirmedItems,
    acceptOrderFn,
    declineOrderFn,
  };
};
