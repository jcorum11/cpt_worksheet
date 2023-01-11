import {createSlice, PayloadAction, current} from '@reduxjs/toolkit';
import type {RootState} from 'libs/store/store';
import {initialState} from './initial-state';

export const counterSlice = createSlice({
  name: 'mediumLog',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveAntecedentAnswer: (state, action: PayloadAction<string>) => {
      state.antecedents.answer = action.payload;
    },

    saveBehaviorsOrThoughtsAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.behaviorsOrThoughts[action.payload.index].answer =
        action.payload.answer;
    },

    saveConsequencesAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.consequences[action.payload.index].answer = action.payload.answer;
    },

    saveFeelingsAnswer: (state, action: PayloadAction<string>) => {
      state.feelings.answer = action.payload;
    },

    saveLogicalAnswer: (state, action: PayloadAction<string>) => {
      state.logical.answer = action.payload;
    },

    saveReflectionsAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.reflections[action.payload.index].answer = action.payload.answer;
    },

    saveSolutionsAnswer: (state, action: PayloadAction<string>) => {
      state.solutions.answer = action.payload;
    },

    saveUnhealthyThoughtsAnswer: (state, action: PayloadAction<string>) => {
      state.unhealthyThoughts.answer = action.payload;
    },

    saveSituationAnswer: (
      state,
      action: PayloadAction<{answer: string; index: number}>,
    ) => {
      state.situation[action.payload.index].answer = action.payload.answer;
    },
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
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAntecent = (state: RootState) => state.mediumLog.antecedents;

export const selectBehaviorsOrThoughts = (state: RootState) =>
  state.mediumLog.behaviorsOrThoughts;

export const selectConsequences = (state: RootState) =>
  state.mediumLog.consequences;

export const selectFeelings = (state: RootState) => state.mediumLog.feelings;

export const selectLogical = (state: RootState) => state.mediumLog.logical;

export const selectReflections = (state: RootState) =>
  state.mediumLog.reflections;

export const selectSolutions = (state: RootState) => state.mediumLog.solutions;

export const selectUnhealthyThoughts = (state: RootState) =>
  state.mediumLog.unhealthyThoughts;

export const selectSituation = (state: RootState) => state.mediumLog.situation;

export default counterSlice.reducer;
