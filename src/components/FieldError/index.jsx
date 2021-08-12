import React from 'react';
import { Text } from 'react-native';
import Balloon from "react-native-balloon";

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default function FieldError({ error }) {
  return (
    <Balloon
    borderRadius={20}
    triangleSize={15}
    triangleOffset="12%"
    triangleDirection='top'
    backgroundColor={colors.red}
    >
      <Text style={{
        color: colors.white,
        fontFamily: fonts.text,
        textAlign: 'center'
      }}>
        {error}
      </Text>
    </Balloon>
  );
}
