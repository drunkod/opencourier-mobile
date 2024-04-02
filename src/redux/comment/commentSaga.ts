import { all, call, fork, put, take } from 'redux-saga/effects';
import {
  createComment,
  createCommentFinished,
  createCommentError,
  updateComment,
  updateCommentFinished,
  updateCommentError,
  deleteComment,
  deleteCommentFinished,
  deleteCommentError,
} from './comment';
import { CommentService } from '@app/services/commentService';

function* createCommentSaga(
  service: CommentService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(createComment);
    try {
      const res = yield call(service.createComment, payload);
      if (res.error) {
        put(createCommentError(res.error));
      } else {
        yield put(createCommentFinished());
      }
    } catch (error) {
      yield put(createCommentError(error as string));
    }
  }
}

function* deleteCommentSaga(
  service: CommentService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(deleteComment);
    try {
      const res = yield call(service.deleteComment, payload);
      if (res.error) {
        put(deleteCommentError(res.error));
      } else {
        yield put(deleteCommentFinished());
      }
    } catch (error) {
      yield put(deleteCommentError(error as string));
    }
  }
}

function* updateCommentSaga(
  service: CommentService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(updateComment);
    try {
      const res = yield call(service.updateComment, payload);
      if (res.error) {
        put(updateCommentError(res.error));
      } else {
        yield put(updateCommentFinished());
      }
    } catch (error) {
      yield put(updateCommentError(error as string));
    }
  }
}

export function* commentSagas(service: CommentService): Generator {
  yield all([
    fork(createCommentSaga, service),
    fork(updateCommentSaga, service),
    fork(deleteCommentSaga, service),
  ]);
}
