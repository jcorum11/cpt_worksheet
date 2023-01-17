import {QuestionAnswer} from 'components/QuestionAnswer';
import {QuestionAnswerArray} from 'components/QuestionAnswerArray';
import {LogProps} from 'libs/utils/types/component-props';
import React from 'react';
import {Text, View} from 'react-native';

export const Log = ({log, date}: LogProps) => {
  const logKeys = Object.keys(log);
  const categories = [
    'antecedents',
    'behaviorsOrThoughts',
    'consequences',
    'feelings',
    'logical',
    'reflections',
    'situation',
    'solutions',
    'unhealthyThoughts',
  ];
  return (
    <View>
      <Text>{date}</Text>
      {logKeys.map(logKey => {
        return [
          ...categories.map(category => {
            return log[logKey][category]['1'] ? (
              <QuestionAnswerArray
                key={logKeys + category}
                category={category}
                data={log[logKey][category]}
              />
            ) : (
              <QuestionAnswer
                key={logKeys + category}
                category={category}
                question={log[logKey][category].question}
                answer={log[logKey][category].answer}
              />
            );
          }),
        ];
      })}
    </View>
  );
};
