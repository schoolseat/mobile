import React from 'react';
import { Text } from 'react-native';
import Balloon from "react-native-balloon";

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default function FieldError({error}) {
  return (
    <Balloon
    backgroundColor={colors.red}
    borderRadius={20}
    triangleSize={15}
    triangleOffset="12%"
    triangleDirection='top'
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
