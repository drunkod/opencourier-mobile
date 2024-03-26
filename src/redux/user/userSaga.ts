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
import { UserServiceResponse } from '@app/services/types';

function* loginUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(login);
    try {
      const res = yield call(service.login, payload);
      if (res.data) {
        yield put(loginFinished(res.data));
      } else {
        yield put(loginError(res.error as string));
      }
      // console.warn('login res ', res);
    } catch (error) {
      yield put(loginError(error as string));
    }
  }
}

function* signupUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(signup);
    try {
      const res: UserServiceResponse = yield call(service.signup, payload);
      if (res.data) {
        yield put(signupFinished(res.data));
      } else {
        yield put(signupError(res.error as string));
      }
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
      const res: UserServiceResponse = yield call(
        service.getUserSettings,
        payload,
      );
      if (res.data) {
        yield put(getUserSettingsFinished(res.data));
      } else {
        yield put(getUserSettingsError(res.error as string));
      }
    } catch (error) {
      yield put(getUserSettingsError(error as string));
    }
  }
}

function* updateUserSettingsSaga(
  service: UserService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateUserSettings);
    try {
      const res: UserServiceResponse = yield call(
        service.updateUserSettings,
        payload,
      );
      if (res.data) {
        yield put(updateUserSettingsFinished(res.data));
      } else {
        yield put(updateUserSettingsError(res.error as string));
      }
    } catch (error) {
      yield put(updateUserSettingsError(error as string));
    }
  }
}

function* updateUserStatusSaga(
  service: UserService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateUserStatus);
    try {
      const res: UserServiceResponse = yield call(
        service.updateUserStatus,
        payload,
      );
      if (res.data) {
        yield put(updateUserStatusFinished(res.data));
      }
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
      const res: UserServiceResponse = yield call(
        service.updateOrderSetting,
        payload,
      );
      if (res.data) {
        yield put(updateOrderSettingFinished(res.data));
      } else {
        yield put(updateOrderSettingError(res.error as string));
      }
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
