import {QuestionAnswerArrayProps} from 'libs/utils/types/component-props';
import React from 'react';
import {Text, View} from 'react-native';

export const QuestionAnswerArray = ({data}: QuestionAnswerArrayProps) => {
  return (
    <>
      {data.map(({question, answer}) => {
        return (
          <View>
            <Text>{question}</Text>
            <Text>{answer}</Text>
          </View>
        );
      })}
    </>
  );
};
