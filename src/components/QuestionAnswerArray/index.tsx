import {useTheme} from '@react-navigation/native';
import {QuestionAnswerArrayProps} from 'libs/utils/types/component-props';
import {Colors} from 'libs/utils/types/themes';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const QuestionAnswerArray = ({
  data,
  category,
}: QuestionAnswerArrayProps) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
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

const makeStyles = (colors: Colors) =>
  StyleSheet.create({
    category: {
      backgroundColor: colors.primary,
    },
  });
