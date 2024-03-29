/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';

import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import colors from '../../styles/colors';

export default function LittleClassesCard({
  name, icon, color, ...rest
}) {
  return (
    <RectButton
      style={{
        margin: 10,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: color,
        width: Dimensions.get('window').width * 0.44,
      }}
      {...rest}
    >
      <View style={styles.container}>
        <FontAwesome name={icon} size={24} color={colors.background} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </RectButton>
  );
}
LittleClassesCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
