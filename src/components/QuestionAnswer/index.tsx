import {QuestionAnswerProps} from 'libs/utils/types/component-props';
import React from 'react';
import {Text, View} from 'react-native';

export const QuestionAnswer = ({question, answer}: QuestionAnswerProps) => {
  return (
    <View>
      <Text>{question}</Text>
      <Text>{answer}</Text>
    </View>
  );
};
