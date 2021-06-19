import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 15,
        marginLeft: 15,
        width: 300,
    },
    mineContainer: {
        flex: 1,
        marginRight: 20,
        marginLeft: 120,
        width: 250,
        alignItems: 'flex-end',
    },
    authorName: {
        marginRight: 20,
        fontFamily: fonts.heading,
    },
    message: {
        fontFamily: fonts.complement,
        marginRight: 20,
    },
    hour: {
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 10,
        marginRight: 5,
    },
    texts: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textsReverse: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
})