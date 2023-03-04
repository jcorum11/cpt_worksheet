import {useTheme} from '@react-navigation/native';
import {QuestionAnswerProps} from 'libs/utils/types/component-props';
import {Colors} from 'libs/utils/types/themes';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const QuestionAnswer = ({
  question,
  answer,
  category,
}: QuestionAnswerProps) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View>
      <TouchableOpacity style={styles.category}>
        <Text>{category}</Text>
      </TouchableOpacity>
      <Text>{question}</Text>
      <Text>{answer}</Text>
    </View>
  );
};

const makeStyles = (colors: Colors) =>
  StyleSheet.create({
    category: {
      backgroundColor: colors.primary,
    },
  });
