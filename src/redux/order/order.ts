import {
  GetOrdersParams,
  GetOrdersReponse,
  MarkAsDeliveredParams,
  NewOrdersParams,
  OrderServiceParams,
  OrderServiceReponse,
} from '@app/services/types';
import { Order } from '@app/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderState {
  newOrders?: Order[];
  inProgressOrders?: Order[];
  orderHistory?: Order[];
  getNewOrdersFinished: boolean;
  getNewOrdersError?: string;
  getInProgressOrdersFinished: boolean;
  getInProgressOrdersError?: string;
  getOrderHistoryFinished: boolean;
  getOrderHistoryError?: string;
  acceptOrderFinished: boolean;
  acceptOrderError?: string;
  declineOrderFinished: boolean;
  declineOrderError?: string;
  createCommentFinished?: boolean;
  createCommentError?: string;
  updateCommentFinished?: boolean;
  updateCommentError?: string;
  deleteCommentFinished?: boolean;
  deleteCommentError?: string;
  confirmItemsFinished: boolean;
  confirmItemsError?: string;
  markAsDeliveredFinished: boolean;
  markAsDeliveredError?: string;
}

const initialState: OrderState = {
  newOrders: undefined,
  getNewOrdersFinished: false,
  getInProgressOrdersFinished: false,
  getOrderHistoryFinished: false,
  acceptOrderFinished: false,
  confirmItemsFinished: false,
  createCommentFinished: false,
  updateCommentFinished: false,
  deleteCommentFinished: false,
  markAsDeliveredFinished: false,
  declineOrderFinished: false,
};

export const orderSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getNewOrders: (state, _action: PayloadAction<NewOrdersParams>) => {
      state.getNewOrdersFinished = false;
      state.getNewOrdersError = undefined;
    },
    getNewOrdersFinished: (state, action: PayloadAction<Order[]>) => {
      state.getNewOrdersFinished = true;
      state.newOrders = action.payload;
    },
    getNewOrdersError: (state, action: PayloadAction<string>) => {
      state.getNewOrdersFinished = true;
      state.getNewOrdersError = action.payload;
      state.newOrders = [];
    },
    getInProgressOrders: (
      state,
      _action: PayloadAction<OrderServiceParams>,
    ) => {
      state.getInProgressOrdersFinished = false;
      state.getInProgressOrdersError = undefined;
    },
    getInProgressOrdersFinished: (state, action: PayloadAction<Order[]>) => {
      state.getInProgressOrdersFinished = true;
      state.inProgressOrders = action.payload;
    },
    getInProgressOrdersError: (state, action: PayloadAction<string>) => {
      state.getInProgressOrdersFinished = true;
      state.getInProgressOrdersError = action.payload;
      state.inProgressOrders = [];
    },
    getOrderHistory: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.getOrderHistoryFinished = false;
      state.getOrderHistoryError = undefined;
    },
    getOrderHistoryOrdersFinished: (state, action: PayloadAction<Order[]>) => {
      state.getOrderHistoryFinished = true;
      state.orderHistory = action.payload;
    },
    getOrderHistoryError: (state, action: PayloadAction<string>) => {
      state.getOrderHistoryFinished = true;
      state.getOrderHistoryError = action.payload;
      state.orderHistory = [];
    },
    acceptOrder: (state, action: PayloadAction<OrderServiceParams>) => {
      state.acceptOrderFinished = false;
      state.acceptOrderError = undefined;
    },
    acceptOrderFinished: state => {
      state.acceptOrderFinished = true;
    },
    acceptOrderError: (state, action: PayloadAction<string>) => {
      state.acceptOrderFinished = true;
      state.acceptOrderError = action.payload;
    },
    declineOrder: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.declineOrderFinished = false;
      state.declineOrderError = undefined;
    },
    declineOrderFinished: state => {
      state.declineOrderFinished = true;
    },
    declineOrderError: (state, action: PayloadAction<string>) => {
      state.declineOrderFinished = true;
      state.declineOrderError = action.payload;
    },
    createComment: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.createCommentFinished = false;
      state.createCommentError = undefined;
    },
    createCommentFinished: (
      state,
      _action: PayloadAction<OrderServiceParams>,
    ) => {
      state.createCommentFinished = false;
      state.createCommentError = undefined;
    },
    createCommentError: (
      state,
      _action: PayloadAction<OrderServiceParams>,
    ) => {
      state.createCommentFinished = false;
      state.createCommentError = undefined;
    },
    confirmItems: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.confirmItemsFinished = false;
      state.confirmItemsError = undefined;
    },
    confirmItemsFinished: (state, action: PayloadAction<Order>) => {
      state.confirmItemsFinished = true;
      const updatedOrders = state.inProgressOrders?.filter(order => order.id != action.payload.id)
      updatedOrders?.push(action.payload)
      state.inProgressOrders = updatedOrders
    },
    confirmItemsError: (state, action: PayloadAction<string>) => {
      state.confirmItemsFinished = true;
      state.confirmItemsError = action.payload;
    },
    markAsDelivered: (state, _action: PayloadAction<OrderServiceParams>) => {
      state.markAsDeliveredFinished = false;
      state.markAsDeliveredError = undefined;
    },
    markAsDeliveredFinished: (state, action: PayloadAction<Order>) => {
      state.markAsDeliveredFinished = true;
      state.inProgressOrders = state.inProgressOrders?.filter(
        order => order.id != action.payload.id,
      );
      state.orderHistory?.push(action.payload);
    },
    markAsDeliveredError: (state, action: PayloadAction<string>) => {
      state.markAsDeliveredFinished = true;
      state.markAsDeliveredError = action.payload;
    },
  },
});

export const selectOrder = (state: { order: OrderState }) =>
  state.order;

export const {
  getNewOrders,
  getNewOrdersError,
  getNewOrdersFinished,
  getInProgressOrders,
  getInProgressOrdersFinished,
  getInProgressOrdersError,
  getOrderHistory,
  getOrderHistoryError,
  getOrderHistoryOrdersFinished,
  acceptOrder,
  acceptOrderError,
  acceptOrderFinished,
  confirmItems,
  confirmItemsError,
  confirmItemsFinished,
  markAsDelivered,
  markAsDeliveredError,
  markAsDeliveredFinished,
  declineOrder,
  declineOrderError,
  declineOrderFinished,
} = orderSlice.actions;

export default orderSlice.reducer;
