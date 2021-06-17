import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    },
    text: {
        margin: 10,
        color: colors.background,
        fontFamily: fonts.heading
    }
})