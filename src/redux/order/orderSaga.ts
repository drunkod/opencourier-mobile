import { all, call, fork, put, take } from 'redux-saga/effects';
import {
  getInProgressOrders,
  getInProgressOrdersError,
  getInProgressOrdersFinished,
  getNewOrders,
  getNewOrdersError,
  getNewOrdersFinished,
  getOrderHistory,
  getOrderHistoryError,
  getOrderHistoryOrdersFinished,
  acceptOrder,
  acceptOrderError,
  acceptOrderFinished,
  confirmItems,
  confirmItemsFinished,
  confirmItemsError,
  markAsDelivered,
  markAsDeliveredError,
  markAsDeliveredFinished,
  declineOrder,
  declineOrderFinished,
  declineOrderError,
} from './order';
import { OrderService } from '@app/services/orderService';
import { updateUserFinished } from '../user/user';

function* getNewOrdersSaga(service: OrderService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(getNewOrders);
    try {
      const res = yield call(service.getNewOrders, payload);
      if (res.data) {
        yield put(getNewOrdersFinished(res.data));
      } else {
        put(getNewOrdersError(res.error));
      }
    } catch (error) {
      yield put(getNewOrdersError(error as string));
    }
  }
}

function* getInProgressOrdersSaga(
  service: OrderService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(getInProgressOrders);
    try {
      const res = yield call(service.getInProgressOrders, payload);
      if (res.data) {
        yield put(getInProgressOrdersFinished(res.data));
      } else {
        yield put(getInProgressOrdersError(res.error));
      }
    } catch (error) {
      yield put(getInProgressOrdersError(error as string));
    }
  }
}

function* getOrderHistorySaga(
  service: OrderService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(getOrderHistory);
    try {
      const res = yield call(service.getOrdersHistory, payload);
      if (res.data){
        yield put(getOrderHistoryOrdersFinished(res.data));
      } else {
        yield put(getOrderHistoryError(res.error));
      }
    } catch (error) {
      yield put(getOrderHistoryError(error as string));
    }
  }
}

function* acceptOrderSaga(service: OrderService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(acceptOrder);
    try {
      const res = yield call(service.acceptOrder, payload);
      if (res.error) {
        put(acceptOrderError(res.error));
      } else {
        yield put(acceptOrderFinished());
      }
    } catch (error) {
      yield put(acceptOrderError(error as string));
    }
  }
}

function* declineOrderSaga(service: OrderService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(declineOrder);
    try {
      const res = yield call(service.declineOrder, payload);
      if (res.data) {
        yield put(updateUserFinished(res.data));
        yield put(declineOrderFinished());
      } else {
        yield put(declineOrderFinished(res.error));
      }
    } catch (error) {
      yield put(declineOrderError(error as string));
    }
  }
}

function* confirmItemsSaga(service: OrderService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(confirmItems);
    try {
      const res = yield call(service.confirmItems, payload);
      yield put(confirmItemsFinished(res));
    } catch (error) {
      yield put(confirmItemsError(error as string));
    }
  }
}

function* markAsDeliveredSaga(
  service: OrderService,
): Generator<any, void, any> {
  while (true) {
    const { order, photos, tags } = yield take(markAsDelivered);
    try {
      const res = yield call(service.markAsDelivered, order, photos, tags);
      yield put(markAsDeliveredFinished(res));
    } catch (error) {
      yield put(markAsDeliveredError(error as string));
    }
  }
}



export function* orderSagas(service: OrderService): Generator {
  yield all([
    fork(getNewOrdersSaga, service),
    fork(getInProgressOrdersSaga, service),
    fork(getOrderHistorySaga, service),
    fork(acceptOrderSaga, service),
    fork(confirmItemsSaga, service),
    fork(markAsDeliveredSaga, service),
    fork(declineOrderSaga, service),
  ]);
}
