import {QuestionAnswer} from 'components/QuestionAnswer';
import {QuestionAnswerArray} from 'components/QuestionAnswerArray';
import {LogProps} from 'libs/utils/types/component-props';
import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Colors} from 'libs/utils/types/themes';
import { Btn } from 'components/Button';

export const Log = ({log, date}: LogProps) => {
  const [expanded, setExpanded] = useState(false)
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
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View>
      <Btn title={date} onPress={() => setExpanded(!expanded)} />
      { expanded && logKeys && logKeys.map(logKey => {
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

const makeStyles = (colors: Colors) =>
  StyleSheet.create({
    date: {
      backgroundColor: colors.notification,
    },
  });
