import {Logs} from 'libs/utils/types/slice-state';

// Define the initial state using that type
export const initialState: Logs = {
  current: {
    antecedents: {
      question:
        'What was happening just before you noticed a change in how you were feeling or acting?',
      answer: '',
    },
    behaviorsOrThoughts: [
      {
        question:
          'A. What did you do or doing? Behaviors can be observable to other people, or can be the things we do or say to ourselves in our minds.',
        answer: '',
      },
      {
        question:
          'B. What did you tell (or currently telling) yourself? What Unhelpful thinking style did you use?',
        answer: '',
      },
    ],
    consequences: [
      {
        question: 'Intended',
        answer: '',
      },
      {
        question: 'Unintended',
        answer: '',
      },
    ],
    feelings: {question: 'What were/are you feeling?', answer: ''},
    logical: {question: 'Are my thought realistic and logical', answer: ''},
    reflections: [
      {
        question: 'What do you notice now about your behaviors?',
        answer: '',
      },
      {
        question:
          'Did any of your actions result in good feelings like pleasure or relief, at least in the short-term?',
        answer: '',
      },
      {
        question:
          'If you carry on acting in those ways, what do you think the long-term result will be?',
        answer: '',
      },
      {
        question:
          'What can you tell yourself the next time you start to feel and do these behaviors?',
        answer: '',
      },
    ],
    situation: [
      {question: 'Who were/are you with?', answer: ''},
      {question: 'What were/are you doing?', answer: ''},
      {question: 'Where were/are you?', answer: ''},
      {question: 'When did this happen?', answer: ''},
    ],
    solutions: {question: '', answer: ''},
    unhealthyThoughts: {question: 'Unhealthy thoughts', answer: ''}, // will need to be broken down from a string by word
  },
  legacy: [],
};
