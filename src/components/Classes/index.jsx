import React from 'react';
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import styles from './styles';

export default function Classes({ data, isTeacher }) {
    return (
        <View style={isTeacher
            ? [
                styles.container, {
                    backgroundColor: colors.green
                }]
            : styles.container
        }>
            <Text style={isTeacher
                ? [
                    styles.title, {
                        color: colors.white,
                    }]
                : styles.title
            }>
                Matematica
            </Text>
            <View style={styles.view}>
                <Text style={isTeacher
                    ? [
                        styles.text, {
                            color: colors.white
                        }]
                    : styles.text
                }>
                    Professor
                </Text>
                <Text style={isTeacher
                    ? [
                        styles.text, {
                            color: colors.white
                        }]
                    : styles.text
                }>
                    25 <Feather name="users" size={20} color={isTeacher ? "white": colors.heading} />
                </Text>
            </View>
        </View>
    );
}