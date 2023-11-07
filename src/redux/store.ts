import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user';
import createSagaMiddleware from 'redux-saga';
import Services from '../services/Services';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});

const services = Services();
sagaMiddleware.run(rootSaga, services);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
