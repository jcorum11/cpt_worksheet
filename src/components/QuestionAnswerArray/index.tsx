import {QuestionAnswerArrayProps} from 'libs/utils/types/component-props';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const QuestionAnswerArray = ({
  data,
  category,
}: QuestionAnswerArrayProps) => {
  return (
    <>
      <Text style={styles.category}>{category}</Text>
      {data.map(({question, answer}, i) => {
        return (
          <View key={question + i}>
            <Text>{question}</Text>
            <Text>{answer}</Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'yellow',
  },
});
