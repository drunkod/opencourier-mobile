import { all, call, fork, put, take } from 'redux-saga/effects';
import {
  login,
  loginError,
  loginFinished,
  getUserSettings,
  getUserSettingsFinished,
  signup,
  signupFinished,
  signupError,
  getUserSettingsError,
  updateOrderSetting,
  updateOrderSettingError,
  updateOrderSettingFinished,
  updateUserSettings,
  updateUserSettingsError,
  updateUserSettingsFinished,
  updateUserStatus,
  updateUserStatusError,
  updateUserStatusFinished,
} from './user';
import { UserService } from '../../services/userService';
import { Setting, User } from '@app/types/types';

function* loginUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(login);
    try {
      const res: User = yield call(
        service.login,
        payload,
      );
      // console.warn('login res ', res);
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
      const res: User = yield call(
        service.signup,
        payload,
      );
      yield put(signupFinished(res));
    } catch (error) {
      console.log('signup error: ', error);
      yield put(signupError(error as string));
    }
  }
}

function* getUserSettingsSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(getUserSettings);
    try {
      const res: Setting = yield call(service.getUserSettings, payload);
      yield put(getUserSettingsFinished(res));
    } catch (error) {
      yield put(getUserSettingsError(error as string));
    }
  }
}

function* updateUserSettingsSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateUserSettings);
    try {
      const res = yield call(service.updateUserSettings, payload);
      yield put(updateUserSettingsFinished(res));
    } catch (error) {
      yield put(updateUserSettingsError(error as string));
    }
  }
}

function* updateUserStatusSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateUserStatus);
    try {
      const res = yield call(service.updateUserStatus, payload);
      yield put(updateUserStatusFinished(res));
    } catch (error) {
      yield put(updateUserStatusError(error as string));
    }
  }
}

function* updateOrderSettingSaga(
  service: UserService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateOrderSetting);
    try {
      const res = yield call(service.updateOrderSetting, payload);
      yield put(updateOrderSettingFinished(res));
    } catch (error) {
      yield put(updateOrderSettingError(error as string));
    }
  }
}

export function* userSagas(service: UserService): Generator {
  yield all([
    fork(loginUserSaga, service),
    fork(signupUserSaga, service),
    fork(getUserSettingsSaga, service),
    fork(updateOrderSettingSaga, service),
    fork(updateUserSettingsSaga, service),
    fork(updateUserStatusSaga, service),
  ]);
}
