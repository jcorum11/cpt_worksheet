export type SituationAnswer = {
  who: QuestionAnswer;
  what: QuestionAnswer;
  where: QuestionAnswer;
  when: QuestionAnswer;
};

export type QuestionAnswer = {
  question: string;
  answer: string;
};
