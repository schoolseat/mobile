/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ name, color, textColor, ...rest }) {
  return (
    <TouchableOpacity
      style={
        color
          ? [
            styles.container, {
              backgroundColor: color
            }]
          : styles.container
      }
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={
        textColor
          ? [
            styles.text, {
              color: textColor
            }]
          : styles.text

      }>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
