import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  addDeviceFinished: boolean;
  addDeviceError?: string;
  removeDeviceFinished: boolean;
  removeDeviceError?: string;
}

const initialState: NotificationState = {
  addDeviceFinished: false,
  removeDeviceFinished: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addDevice: (state, _action: PayloadAction<string>) => {
      state.addDeviceFinished = false;
      state.addDeviceError = undefined;
    },
    addDeviceFinished: (state, _action: PayloadAction<string>) => {
      state.addDeviceFinished = true;
    },
    addDeviceError: (state, action: PayloadAction<string>) => {
      state.addDeviceFinished = true;
      state.addDeviceError = action.payload;
    },
    removeDevice: (state, _action: PayloadAction<string>) => {
      state.removeDeviceFinished = false;
      state.removeDeviceError = undefined;
    },
    removeDeviceFinished: (state, _action: PayloadAction<string>) => {
      state.removeDeviceFinished = true;
    },
    removeDeviceError: (state, action: PayloadAction<string>) => {
      state.removeDeviceFinished = true;
      state.removeDeviceError = action.payload;
    },
  },
});

export const {
  addDevice,
  addDeviceError,
  addDeviceFinished,
  removeDevice,
  removeDeviceError,
  removeDeviceFinished,
} = notificationSlice.actions;
export default notificationSlice.reducer;
