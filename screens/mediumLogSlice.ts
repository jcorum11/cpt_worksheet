import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../libs/store/store';
import type {
  SituationAnswer,
  QuestionAnswer,
} from '../libs/utils/types/answers';

// Define a type for the slice state
interface MediumLogState {
  antecedentAnswer: string;
  behaviorsOrThoughtsAnswer: string;
  consequencesAnswer: string;
  feelingsAnswer: string;
  logicalAnswer: string;
  reflectionsAnswer: string;
  situationAnswer: SituationAnswer;
  solutionsAnswer: string;
  unhealthyThoughtsAnswer: string[];
}

// Define the initial state using that type
const initialState: MediumLogState = {
  antecedentAnswer: '',
  behaviorsOrThoughtsAnswer: '',
  consequencesAnswer: '',
  feelingsAnswer: '',
  logicalAnswer: '',
  reflectionsAnswer: '',
  situationAnswer: {
    who: {question: '', answer: ''},
    what: {question: '', answer: ''},
    where: {question: '', answer: ''},
    when: {question: '', answer: ''},
  },
  solutionsAnswer: '',
  unhealthyThoughtsAnswer: [], // will need to be broken down from a string by word
};

export const counterSlice = createSlice({
  name: 'mediumLog',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveAntecedentAnswer: (state, action: PayloadAction<string>) => {
      state.antecedentAnswer = action.payload;
    },
    saveBehaviorsOrThoughtsAnswer: (state, action: PayloadAction<string>) => {
      state.behaviorsOrThoughtsAnswer = action.payload;
    },
    saveConsequencesAnswer: (state, action: PayloadAction<string>) => {
      state.consequencesAnswer = action.payload;
    },
    saveFeelingsAnswer: (state, action: PayloadAction<string>) => {
      state.feelingsAnswer = action.payload;
    },
    saveLogicalAnswer: (state, action: PayloadAction<string>) => {
      state.logicalAnswer = action.payload;
    },
    saveReflectionsAnswer: (state, action: PayloadAction<string>) => {
      state.reflectionsAnswer = action.payload;
    },
    saveSolutionsAnswer: (state, action: PayloadAction<string>) => {
      state.solutionsAnswer = action.payload;
    },
    saveUnhealthyThoughtsAnswer: (state, action: PayloadAction<string>) => {
      state.unhealthyThoughtsAnswer.push(...action.payload.split(' '));
    },
    saveSituationAnswer: (state, action: PayloadAction<SituationAnswer>) => {
      state.situationAnswer = {...action.payload};
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
export const selectAntecentAnswer = (state: RootState) =>
  state.mediumLog.antecedentAnswer;
export const selectBehaviorsOrThoughtsAnswer = (state: RootState) =>
  state.mediumLog.behaviorsOrThoughtsAnswer;
export const selectConsequencesAnswer = (state: RootState) =>
  state.mediumLog.consequencesAnswer;
export const selectFeelingsAnswer = (state: RootState) =>
  state.mediumLog.feelingsAnswer;
export const selectLogicalAnswer = (state: RootState) =>
  state.mediumLog.logicalAnswer;
export const selectReflectionsAnswer = (state: RootState) =>
  state.mediumLog.reflectionsAnswer;
export const selectSolutionsAnswer = (state: RootState) =>
  state.mediumLog.solutionsAnswer;
export const selectUnhealthyThoughtsAnswer = (state: RootState) =>
  state.mediumLog.unhealthyThoughtsAnswer;

export default counterSlice.reducer;
