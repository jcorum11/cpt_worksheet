import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import api from 'api';
import type {RootState} from 'libs/store/store';
import {MediumLogState} from 'libs/utils/types/slice-state';
import {initialState} from './initial-state';

export const fetchLegacyLog = createAsyncThunk(
  'users/fetchByUsernameStatus',
  async (uid: string, thunkAPI) => {
    const response = await api.mediumLog.getLogs(uid);
    return response;
  },
);

export const mediumLogSlice = createSlice({
  name: 'mediumLog',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveAntecedentAnswer: (state, action: PayloadAction<string>) => {
      state.current.antecedents.answer = action.payload;
    },

    saveBehaviorsOrThoughtsAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.current.behaviorsOrThoughts[action.payload.index].answer =
        action.payload.answer;
    },

    saveConsequencesAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.current.consequences[action.payload.index].answer =
        action.payload.answer;
    },

    saveFeelingsAnswer: (state, action: PayloadAction<string>) => {
      state.current.feelings.answer = action.payload;
    },

    saveLogicalAnswer: (state, action: PayloadAction<string>) => {
      state.current.logical.answer = action.payload;
    },

    saveReflectionsAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.current.reflections[action.payload.index].answer =
        action.payload.answer;
    },

    saveSolutionsAnswer: (state, action: PayloadAction<string>) => {
      state.current.solutions.answer = action.payload;
    },

    saveUnhealthyThoughtsAnswer: (state, action: PayloadAction<string>) => {
      state.current.unhealthyThoughts.answer = action.payload;
    },

    saveSituationAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.current.situation[action.payload.index].answer =
        action.payload.answer;
    },

    saveLegacyLog: (state, action: PayloadAction<MediumLogState[]>) => {
      state.legacy = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLegacyLog.fulfilled, (state, action: any) => {
      state.legacy = action.payload;
    });
  },
});

export const {
  saveAntecedentAnswer,
  saveBehaviorsOrThoughtsAnswer,
  saveConsequencesAnswer,
  saveFeelingsAnswer,
  saveLogicalAnswer,
  saveReflectionsAnswer,
  saveSolutionsAnswer,
  saveUnhealthyThoughtsAnswer,
  saveSituationAnswer,
} = mediumLogSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAntecent = (state: RootState) =>
  state.mediumLog.current.antecedents;

export const selectBehaviorsOrThoughts = (state: RootState) =>
  state.mediumLog.current.behaviorsOrThoughts;

export const selectConsequences = (state: RootState) =>
  state.mediumLog.current.consequences;

export const selectFeelings = (state: RootState) =>
  state.mediumLog.current.feelings;

export const selectLogical = (state: RootState) =>
  state.mediumLog.current.logical;

export const selectReflections = (state: RootState) =>
  state.mediumLog.current.reflections;

export const selectSolutions = (state: RootState) =>
  state.mediumLog.current.solutions;

export const selectUnhealthyThoughts = (state: RootState) =>
  state.mediumLog.current.unhealthyThoughts;

export const selectSituation = (state: RootState) =>
  state.mediumLog.current.situation;

export const selectLegacyLogs = (state: RootState) => state.mediumLog.legacy;

export default mediumLogSlice.reducer;
