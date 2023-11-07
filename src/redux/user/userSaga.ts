import { all, call, fork, put, take } from 'redux-saga/effects';
import {
  login,
  loginError,
  loginFinished,
  getUser,
  getUserError,
  getUserFinished,
  signup,
  signupFinished,
  signupError,
} from './user';
import { UserService } from '../../services/userService';

function* loginUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(login);
    try {
      const res = yield call(service.login, payload);
      yield put(loginFinished(res));
    } catch (error) {
      yield put(loginError(error as string));
    }
  }
}

function* signupUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(signup);
    try {
      const res = yield call(service.signup, payload);
      yield put(signupFinished(res));
    } catch (error) {
      yield put(signupError(error as string));
    }
  }
}

function* getUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    yield take(getUser);
    try {
      const res = yield call(service.getUserDetails);
      yield put(getUserFinished(res));
    } catch (error) {
      yield put(getUserError(error as string));
    }
  }
}

export function* userSagas(service: UserService): Generator {
  yield all([
    fork(loginUserSaga, service),
    fork(signupUserSaga, service),
    fork(getUserSaga, service),
  ]);
}
