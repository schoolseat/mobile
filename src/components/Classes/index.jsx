import React from 'react';
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import styles from './styles';

export default function Classes({ data, isTeacher, ...rest }) {
    return (
        <RectButton style={isTeacher
            ? [
                styles.container, {
                    backgroundColor: colors.green
                }]
            : styles.container
        }
        {...rest}
        >
            <Text style={isTeacher
                ? [
                    styles.title, {
                        color: colors.white,
                    }]
                : styles.title
            }>
               {data.discipline}
            </Text>
            <View style={styles.view}>
                <Text style={isTeacher
                    ? [
                        styles.text, {
                            color: colors.white
                        }]
                    : styles.text
                }>
                   {isTeacher ? 'Professor' : 'Aluno'}
                </Text>
                <Text style={isTeacher
                    ? [
                        styles.text, {
                            color: colors.white
                        }]
                    : styles.text
                }>
                    {data.users.length} <Feather name="users" size={20} color={isTeacher ? "white": colors.heading} />
                </Text>
            </View>
        </RectButton>
    );
}