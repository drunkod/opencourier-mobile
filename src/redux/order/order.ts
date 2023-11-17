import {
  GetOrdersParams,
  GetOrdersReponse,
  MarkAsDeliveredParams,
} from '@app/services/types';
import { Order } from '@app/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
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
  confirmItemsFinished: boolean;
  confirmItemsError?: string;
  markAsDeliveredFinished: boolean;
  markAsDeliveredError?: string;
  acceptedOrder?: Order;
  declinedOrder?: Order;
}

const initialState: UserState = {
  newOrders: undefined,
  getNewOrdersFinished: false,
  getInProgressOrdersFinished: false,
  getOrderHistoryFinished: false,
  acceptOrderFinished: false,
  confirmItemsFinished: false,
  markAsDeliveredFinished: false,
  declineOrderFinished: false,
};

export const orderSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getNewOrders: (state, _action: PayloadAction<GetOrdersParams>) => {
      state.getNewOrdersFinished = false;
      state.getNewOrdersError = undefined;
    },
    getNewOrdersFinished: (state, action: PayloadAction<GetOrdersReponse>) => {
      state.getNewOrdersFinished = true;
      state.newOrders = action.payload.deliveries;
    },
    getNewOrdersError: (state, action: PayloadAction<string>) => {
      state.getNewOrdersFinished = true;
      state.getNewOrdersError = action.payload;
      state.newOrders = [];
    },
    getInProgressOrders: (state, _action: PayloadAction<GetOrdersParams>) => {
      state.getInProgressOrdersFinished = false;
      state.getInProgressOrdersError = undefined;
    },
    getInProgressOrdersFinished: (
      state,
      action: PayloadAction<GetOrdersReponse>,
    ) => {
      state.getInProgressOrdersFinished = true;
      state.inProgressOrders = action.payload.deliveries;
    },
    getInProgressOrdersError: (state, action: PayloadAction<string>) => {
      state.getInProgressOrdersFinished = true;
      state.getInProgressOrdersError = action.payload;
      state.inProgressOrders = [];
    },
    getOrderHistory: (state, _action: PayloadAction<GetOrdersParams>) => {
      state.getOrderHistoryFinished = false;
      state.getOrderHistoryError = undefined;
    },
    getOrderHistoryOrdersFinished: (
      state,
      action: PayloadAction<GetOrdersReponse>,
    ) => {
      state.getOrderHistoryFinished = true;
      state.orderHistory = action.payload.deliveries;
    },
    getOrderHistoryError: (state, action: PayloadAction<string>) => {
      state.getOrderHistoryFinished = true;
      state.getOrderHistoryError = action.payload;
      state.orderHistory = [];
    },
    acceptOrder: (state, action: PayloadAction<Order>) => {
      state.acceptOrderFinished = false;
      state.acceptOrderError = undefined;
      //DEMO
      state.acceptedOrder = action.payload;
      state.newOrders = state.newOrders?.filter(
        temp => temp.id !== action.payload.id,
      );
    },
    acceptOrderFinished: state => {
      state.acceptOrderFinished = true;
    },
    acceptOrderError: (state, action: PayloadAction<string>) => {
      state.acceptOrderFinished = true;
      state.acceptOrderError = action.payload;
    },
    declineOrder: (state, action: PayloadAction<Order>) => {
      state.declineOrderFinished = false;
      state.declineOrderError = undefined;
      //DEMO
      state.declinedOrder = action.payload;
    },
    declineOrderFinished: state => {
      state.declineOrderFinished = true;
    },
    declineOrderError: (state, action: PayloadAction<string>) => {
      state.declineOrderFinished = true;
      state.declineOrderError = action.payload;
    },
    confirmItems: state => {
      state.confirmItemsFinished = false;
      state.confirmItemsError = undefined;
    },
    confirmItemsFinished: state => {
      state.confirmItemsFinished = true;
    },
    confirmItemsError: (state, action: PayloadAction<string>) => {
      state.confirmItemsFinished = true;
      state.confirmItemsError = action.payload;
    },
    markAsDelivered: (state, _action: PayloadAction<MarkAsDeliveredParams>) => {
      state.markAsDeliveredFinished = false;
      state.markAsDeliveredError = undefined;
    },
    markAsDeliveredFinished: state => {
      state.markAsDeliveredFinished = true;
    },
    markAsDeliveredError: (state, action: PayloadAction<string>) => {
      state.markAsDeliveredFinished = true;
      state.markAsDeliveredError = action.payload;
    },
  },
});

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
