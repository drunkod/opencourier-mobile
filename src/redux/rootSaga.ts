import { all, fork } from 'redux-saga/effects';
import { userSagas } from './user/userSaga';
import { Services } from '../services/Services';

export default function* rootSaga(services: Services): Generator {
  yield all([fork(userSagas, services.userService)]);
}
