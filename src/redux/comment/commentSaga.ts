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
  upvoteComment,
  upvoteCommentError,
  upvoteCommentFinished,
  downvoteComment,
  downvoteCommentError,
  downvoteCommentFinished,
} from './comment';
import { CommentService } from '@app/services/commentService';
import { handleAPIError } from '@app/utilities/error';

function* createCommentSaga(
  service: CommentService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(createComment);
    try {
      const res = yield call(service.createComment, payload);
      if (res.error) {
        put(createCommentError(handleAPIError(res)));
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
      if (res.data) {
        yield put(deleteCommentFinished());
      } else {
        put(deleteCommentError(handleAPIError(res)));
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
        put(updateCommentError(handleAPIError(res)));
      } else {
        yield put(updateCommentFinished());
      }
    } catch (error) {
      yield put(updateCommentError(error as string));
    }
  }
}

function* upvoteCommentSaga(
  service: CommentService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(upvoteComment);
    try {
      const res = yield call(service.upvoteComment, payload);
      if (res.error) {
        put(upvoteCommentError(res.error));
      } else {
        yield put(upvoteCommentFinished());
      }
    } catch (error) {
      yield put(upvoteCommentError(error as string));
    }
  }
}

function* downvoteCommentSaga(
  service: CommentService,
): Generator<any, void, any> {
  while (true) {
    const { payload } = yield take(downvoteComment);
    try {
      const res = yield call(service.downvoteComment, payload);
      if (res.error) {
        put(downvoteCommentError(res.error));
      } else {
        yield put(downvoteCommentFinished());
      }
    } catch (error) {
      yield put(downvoteCommentError(error as string));
    }
  }
}

export function* commentSagas(service: CommentService): Generator {
  yield all([
    fork(createCommentSaga, service),
    fork(updateCommentSaga, service),
    fork(deleteCommentSaga, service),
    fork(upvoteCommentSaga, service),
    fork(downvoteCommentSaga, service),
  ]);
}
