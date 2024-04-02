import { all, fork } from 'redux-saga/effects';
import { userSagas } from './user/userSaga';
import { orderSagas } from './order/orderSaga';
import { Services } from '../services/Services';
import { commentSagas } from './comment/commentSaga';

export default function* rootSaga(services: Services): Generator {
  yield all([
    fork(userSagas, services.userService),
    fork(orderSagas, services.orderService),
    fork(commentSagas, services.commentService),
  ]);
}
