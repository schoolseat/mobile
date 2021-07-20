import React from 'react';
import { View, Text } from 'react-native';

import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import styles from './styles';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const today = new Date();

export default function DaysOfWeek({ day, dayInitial }) {
    return (
        <View style={
            today.getDay() === day
                ? [styles.days, {
                    margin: 5,
                    padding: 10,
                    backgroundColor: colors.orange
                }]
                : styles.days
        }
        >
            <Text style={
                today.getDay() === day
                    ? [styles.daysText, { color: colors.white }]
                    : styles.daysText
            }
            >
                {dayInitial}
            </Text>
            <Text
                style={today.getDay() === day
                    ? {
                        color: colors.white,
                        fontFamily: fonts.heading
                    }
                    : styles.daysDay}
            >
                {dayjs().day(day).format('DD')}
            </Text>
        </View>
    );
}

DaysOfWeek.propTypes = {
    day: PropTypes.number.isRequired,
    dayInitial: PropTypes.string.isRequired,
};
