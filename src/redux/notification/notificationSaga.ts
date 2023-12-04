import { all, call, fork, put, take } from 'redux-saga/effects';
import {
  addDevice,
  addDeviceError,
  addDeviceFinished,
  removeDevice,
  removeDeviceError,
  removeDeviceFinished,
} from './notification';
import { NotificationDeviceService } from '../../services/notificationDeviceService';

function* addDeviceSaga(
  service: NotificationDeviceService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(addDevice);
    try {
      const res = yield call(service.addDeviceApi);
      yield put(addDeviceFinished(res));
    } catch (error) {
      yield put(addDeviceError(error as string));
    }
  }
}

function* removeDeviceSaga(
  service: NotificationDeviceService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(removeDevice);
    try {
      const res = yield call(service.removeDeviceApi);
      yield put(removeDeviceFinished(res));
    } catch (error) {
      yield put(removeDeviceError(error as string));
    }
  }
}

export function* userSagas(service: NotificationDeviceService): Generator {
  yield all([fork(addDeviceSaga, service), fork(removeDeviceSaga, service)]);
}
