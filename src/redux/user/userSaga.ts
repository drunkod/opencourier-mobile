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
  updateUserSettings,
  updateUserSettingsError,
  updateUserSettingsFinished,
  updateUser,
  updateUserFinished,
  updateUserError,
} from './user';
import { UserService } from '../../services/userService';
import { Setting, User } from '@app/types/types';
import { UserServiceResponse } from '@app/services/types';
import { handleAPIError } from '@app/utilities/error';

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
      yield put(loginError(handleAPIError(error)));
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
function* updateUserSaga(service: UserService): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateUser);
    try {
      const res: UserServiceResponse = yield call(service.updateUser, payload);
      if (res.data) {
        yield put(updateUserFinished(res.data));
      }
    } catch (error) {
      yield put(updateUserError(error as string));
    }
  }
}

export function* userSagas(service: UserService): Generator {
  yield all([
    fork(loginUserSaga, service),
    fork(signupUserSaga, service),
    fork(getUserSettingsSaga, service),
    fork(updateUserSettingsSaga, service),
    fork(updateUserSaga, service),
  ]);
}
