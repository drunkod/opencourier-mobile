import { LoginParams, SignupParams } from '@app/services/types';
import { User } from '@app/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user?: User;
  loginFinished: boolean;
  loginError?: string;
  signupFinished: boolean;
  signupError?: string;
  getUserFinished: boolean;
  getUserError?: string;
}

const initialState: UserState = {
  user: undefined,
  loginFinished: false,
  signupFinished: false,
  getUserFinished: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, _action: PayloadAction<LoginParams>) => {
      state.loginFinished = false;
      state.loginError = undefined;
    },
    loginFinished: (state, action: PayloadAction<User>) => {
      state.loginFinished = true;
      state.user = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.loginFinished = true;
      state.loginError = action.payload;
    },
    signup: (state, _action: PayloadAction<SignupParams>) => {
      state.signupFinished = false;
      state.signupError = undefined;
    },
    signupFinished: (state, action: PayloadAction<User>) => {
      state.signupFinished = true;
      state.user = action.payload;
    },
    signupError: (state, action: PayloadAction<string>) => {
      state.signupFinished = true;
      state.signupError = action.payload;
    },
    getUser: state => {
      state.getUserFinished = false;
      state.getUserError = undefined;
    },
    getUserFinished: (state, action: PayloadAction<User>) => {
      state.getUserFinished = true;
      state.user = action.payload;
    },
    getUserError: (state, action: PayloadAction<string>) => {
      state.getUserFinished = true;
      state.getUserError = action.payload;
    },
  },
});

export const {
  login,
  loginFinished,
  loginError,
  getUser,
  getUserError,
  getUserFinished,
  signup,
  signupError,
  signupFinished,
} = userSlice.actions;
export default userSlice.reducer;
