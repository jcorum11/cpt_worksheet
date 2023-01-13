import {configureStore} from '@reduxjs/toolkit';
import mediumLogReducer from 'libs/store/medium-log-slice';
import userReducer from 'libs/store/user-slice';

export const store = configureStore({
  reducer: {
    mediumLog: mediumLogReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
