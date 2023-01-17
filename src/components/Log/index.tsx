import {QuestionAnswer} from 'components/QuestionAnswer';
import {QuestionAnswerArray} from 'components/QuestionAnswerArray';
import {LogProps} from 'libs/utils/types/component-props';
import React from 'react';
import {View} from 'react-native';

export const Log = ({log}: LogProps) => {
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
      {logKeys.map(logKey => {
        return [
          ...categories.map(category => {
            return category.constructor === Array ? (
              <QuestionAnswerArray
                key={logKeys + category}
                data={log[logKey][category]}
              />
            ) : (
              <QuestionAnswer
                key={logKeys + category}
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
