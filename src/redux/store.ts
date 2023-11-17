import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user';
import orderReducer from './order/order';
import createSagaMiddleware from 'redux-saga';
import Services from '../services/Services';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
  middleware: [sagaMiddleware],
});

const services = Services();
sagaMiddleware.run(rootSaga, services);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
