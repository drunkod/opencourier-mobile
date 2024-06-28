import { OrderServiceParams } from '@app/services/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { orderSlice } from '../order/order';

interface CommentState {
  createCommentFinished?: boolean;
  createCommentError?: string;
  updateCommentFinished?: boolean;
  updateCommentError?: string;
  deleteCommentFinished?: boolean;
  deleteCommentError?: string;
  upvoteCommentFinished?: boolean;
  upvoteCommentError?: string;
  downvoteCommentFinished?: boolean;
  downvoteCommentError?: string;
}

const initialState: CommentState = {
  createCommentFinished: false,
  updateCommentFinished: false,
  deleteCommentFinished: false,
  upvoteCommentFinished: false,
  downvoteCommentFinished: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    createComment: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.createCommentFinished = false;
      state.createCommentError = undefined;
    },
    createCommentFinished: state => {
      state.createCommentFinished = true;
    },
    createCommentError: (state, action: PayloadAction<string>) => {
      state.createCommentFinished = true;
      state.createCommentError = action.payload;
    },
    updateComment: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.updateCommentFinished = false;
      state.updateCommentError = undefined;
    },
    updateCommentFinished: state => {
      state.updateCommentFinished = true;
    },
    updateCommentError: (state, action: PayloadAction<string>) => {
      state.updateCommentFinished = true;
      state.updateCommentError = action.payload;
    },
    deleteComment: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.deleteCommentFinished = false;
      state.deleteCommentError = undefined;
    },
    deleteCommentFinished: state => {
      state.deleteCommentFinished = true;
    },
    deleteCommentError: (state, action: PayloadAction<string>) => {
      state.deleteCommentFinished = true;
      state.deleteCommentError = action.payload;
    },
    upvoteComment: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.upvoteCommentFinished = false;
      state.upvoteCommentError = undefined;
    },
    upvoteCommentFinished: state => {
      state.upvoteCommentFinished = true;
    },
    upvoteCommentError: (state, action: PayloadAction<string>) => {
      state.upvoteCommentFinished = true;
      state.upvoteCommentError = action.payload;
    },
    downvoteComment: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.downvoteCommentFinished = false;
      state.downvoteCommentError = undefined;
    },
    downvoteCommentFinished: state => {
      state.downvoteCommentFinished = true;
    },
    downvoteCommentError: (state, action: PayloadAction<string>) => {
      state.downvoteCommentFinished = true;
      state.downvoteCommentError = action.payload;
    },
  },
});

export const selectComment = (state: { comment: CommentState }) =>
  state.comment;

export const {
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
} = commentSlice.actions;

export default commentSlice.reducer;
