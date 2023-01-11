import {configureStore} from '@reduxjs/toolkit';
import mediumLogReducer from 'libs/store/medium-log-slice';

export const store = configureStore({
  reducer: {
    mediumLog: mediumLogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
