import {QuestionAnswerProps} from 'libs/utils/types/component-props';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const QuestionAnswer = ({
  question,
  answer,
  category,
}: QuestionAnswerProps) => {
  return (
    <View>
      <Text style={styles.category}>{category}</Text>
      <Text>{question}</Text>
      <Text>{answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'yellow',
  },
});
