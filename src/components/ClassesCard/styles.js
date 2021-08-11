import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        height: 80,
        elevation: 2,
        marginBottom: 15,
        borderRadius: 20,
        shadowRadius: 1.41,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        width: Dimensions.get('window').width * 0.95,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    title: {
        fontSize: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    view: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15,
        color: colors.heading,
        fontFamily: fonts.text,
    }
})