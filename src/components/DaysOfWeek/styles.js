import StyleSheet from 'react-native-extended-stylesheet';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default StyleSheet.create({
    days: {
        margin: '1rem',
        borderRadius: '.7rem',
    },
    daysText: {
        fontSize: '.7rem',
        color: colors.heading,
        fontFamily: fonts.text,
    },
    daysDay: {
        fontSize: '1rem',
        fontFamily: fonts.heading,
    },
})
