import {
  UserParams,
  LoginParams,
  SignupParams,
} from '@app/services/types';
import { OrderSetting } from '@app/types/enums';
import { Setting, User, UserStatus } from '@app/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user?: User;
  settings?: Setting;
  isLoading?: boolean;
  fcmToken?: string;
  getFcmToken: {
    getFcmTokenFinished: boolean;
    getFcmTokenError?: string;
  };
  login?: {
    loginFinished: boolean;
    loginError?: string;
  };
  signup?: {
    signupFinished: boolean;
    signupError?: string;
  };
  updateUser?: {
    updateUserFinished: boolean;
    updateUserError: string;
  };
  getUserSettings: {
    getUserSettingsFinished: boolean;
    getUserSettingsError?: string;
  };
  updateUserSettings: {
    updateUserSettingsFinished: boolean;
    updateUserSettingsError?: string;
  };
  updateUserStatus: {
    updateUserStatusFinished: boolean;
    updateUserStatusError?: string;
  };
  updateOrderSetting: {
    updateOrderSettingFinished: boolean;
    updateOrderSettingError?: string;
  };
}

const initialState: UserState = {} as UserState;

// Redux allows us to write mutating logic in reducers
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFcmToken: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.getFcmToken = {
        getFcmTokenFinished: false,
        getFcmTokenError: undefined,
      };
    },
    getFcmTokenFinished: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.getFcmToken = {
        getFcmTokenFinished: true,
        getFcmTokenError: undefined,
      };
      state.fcmToken = action.payload;
    },
    getFcmTokenError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.getFcmToken = {
        getFcmTokenFinished: true,
        getFcmTokenError: action.payload,
      };
    },
    login: (state, _action: PayloadAction<LoginParams>) => {
      state.isLoading = true;
      state.login = {
        loginFinished: false,
        loginError: undefined,
      };
    },
    loginFinished: (
      state,
      action: PayloadAction<User>,
    ) => {
      state.isLoading = false;
      state.user = action.payload;
      state.login = {
        loginFinished: true,
      };
      // console.warn('login finished');
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.login = {
        loginFinished: true,
        loginError: action.payload,
      };
    },
    signup: (state, _action: PayloadAction<SignupParams>) => {
      state.isLoading = true;
      state.signup = {
        signupFinished: false,
        signupError: undefined,
      };
    },
    signupFinished: (
      state,
      action: PayloadAction<User>,
    ) => {
      state.isLoading = false;
      state.user = action.payload;
      state.signup = {
        signupFinished: true,
      };
    },
    signupError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.signup = {
        signupFinished: true,
        signupError: action.payload,
      };
    },
    getUserSettings: (state, _action: PayloadAction<UserParams>) => {
      state.isLoading = true;
      state.getUserSettings = {
        getUserSettingsFinished: false,
        getUserSettingsError: undefined,
      };
    },
    getUserSettingsFinished: (state, action: PayloadAction<Setting>) => {
      state.isLoading = false;
      state.settings = action.payload;
      state.getUserSettings = {
        getUserSettingsFinished: true,
      };
    },
    getUserSettingsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.getUserSettings = {
        getUserSettingsFinished: true,
        getUserSettingsError: action.payload,
      };
    },
    updateUserSettings: (state, _action: PayloadAction<Setting>) => {
      state.isLoading = true;
      state.updateUserSettings = {
        updateUserSettingsFinished: false,
        updateUserSettingsError: undefined,
      };
    },
    updateUserSettingsFinished: (state, action: PayloadAction<Setting>) => {
      state.isLoading = false;
      state.settings = action.payload;
      state.updateUserSettings = {
        updateUserSettingsFinished: true,
      };
    },
    updateUserSettingsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.updateUserSettings = {
        updateUserSettingsFinished: true,
        updateUserSettingsError: action.payload,
      };
    },
    updateUserStatus: (state, _action: PayloadAction<UserStatus>) => {
      state.isLoading = true;
      state.updateUserStatus = {
        updateUserStatusFinished: false,
        updateUserStatusError: undefined,
      };
    },
    updateUserStatusFinished: (state, action: PayloadAction<UserStatus>) => {
      state.isLoading = false;
      state.user.status = action.payload;
      state.updateUserStatus = {
        updateUserStatusFinished: true,
      };
    },
    updateUserStatusError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.updateUserStatus = {
        updateUserStatusFinished: true,
        updateUserStatusError: action.payload,
      };
    },
    updateOrderSetting: (state, _action: PayloadAction<OrderSetting>) => {
      state.isLoading = true;
      state.updateOrderSetting = {
        updateOrderSettingFinished: false,
        updateOrderSettingError: undefined,
      };
    },
    updateOrderSettingFinished: (
      state,
      action: PayloadAction<OrderSetting>,
    ) => {
      state.isLoading = false;
      state.user.orderSetting = action.payload;
      state.updateOrderSetting = {
        updateOrderSettingFinished: true,
      };
    },
    updateOrderSettingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.updateOrderSetting = {
        updateOrderSettingFinished: true,
        updateOrderSettingError: action.payload,
      };
    },
  },
});

export const selectUser = (state: { user: UserState; order: UserState }) =>
  state.user;

export const {
  login,
  loginFinished,
  loginError,
  signup,
  signupError,
  signupFinished,
  getUserSettings,
  getUserSettingsFinished,
  getUserSettingsError,
  updateUserSettings,
  updateUserSettingsFinished,
  updateUserSettingsError,
  updateOrderSetting,
  updateOrderSettingFinished,
  updateOrderSettingError,
  updateUserStatus,
  updateUserStatusFinished,
  updateUserStatusError,
  getFcmToken,
  getFcmTokenError,
  getFcmTokenFinished,
} = userSlice.actions;
export default userSlice.reducer;
