import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from 'libs/store/store';
import {initialState} from './initial-state';
import api from 'api';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const fetchByUsername = createAsyncThunk(
  'users/fetchByUsernameStatus',
  async (props: {email: string; password: string}, thunkAPI) => {
    const {email, password} = props;
    const response = await api.user.fetchByUsername(email, password);
    return response;
  },
);

export const post = createAsyncThunk(
  'users/postUser',
  async (props: {username: string; password: string}, thunkAPI) => {
    const {username, password} = props;
    const response = await api.user.post(username, password);
    return response;
  },
);

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUid: (state, action: PayloadAction<string | undefined>) => {
      state.uid = action.payload;
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  // extraReducers: builder => {
  //   // builder.addCase(
  //   //   fetchByUsername.fulfilled,
  //   //   (state, action: PayloadAction<FirebaseAuthTypes.User | undefined>) => {
  //   //     state.userInfo = action.payload;
  //   //   },
  //   // );
  // },
});

export const {setUid, setPassword} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserInfo = (state: RootState) => state.user.uid;
export const selectPassword = (state: RootState) => state.user.password;

export default userSlice.reducer;
