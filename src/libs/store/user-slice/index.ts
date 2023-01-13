import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from 'libs/store/store';
import {initialState} from './initial-state';
import {userAPI} from 'api';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const fetchUserByUsername = createAsyncThunk(
  'users/fetchByUsernameStatus',
  async (props: {email: string; password: string}, thunkAPI) => {
    const {email, password} = props;
    const response = await userAPI.fetchByUsername(email, password);
    return response;
  },
);

export const postUser = createAsyncThunk(
  'users/postUser',
  async (props: {username: string; password: string}, thunkAPI) => {
    const {username, password} = props;
    const response = await userAPI.postUser(username, password);
    return response;
  },
);

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<FirebaseAuthTypes.UserCredential>,
    ) => {
      state.userInfo = action.payload;
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchUserByUsername.fulfilled,
      (
        state,
        action: PayloadAction<FirebaseAuthTypes.UserCredential | undefined>,
      ) => {
        state.userInfo = action.payload;
      },
    );
  },
});

export const {setUserInfo, setPassword} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsername = (state: RootState) => state.user.userInfo;
export const selectPassword = (state: RootState) => state.user.password;

export default counterSlice.reducer;
