import {configureStore} from '@reduxjs/toolkit';
import mediumLogReducer from '../../screens/mediumLogSlice';

export const store = configureStore({
  reducer: {
    mediumLog: mediumLogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
