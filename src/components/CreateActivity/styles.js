import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        marginTop: 20,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fonts.heading,
    },
    titles: {
        fontSize: 20,
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fonts.heading,
    },
    titleView: {
        width: '100%',
        marginBottom: 25,
        textAlign: 'center',
        alignItems: 'center',
    },
    inputsView: {
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        flexDirection: 'column',
    },
    texts: {
        fontSize: 15,
        color: colors.white,
        fontFamily: fonts.text
    },
    textsinput: {
        marginBottom: 10,
        color: colors.white,
        borderBottomWidth: 1,
        fontFamily: fonts.text,
        borderBottomColor: colors.white,
    },
    button: {
        marginBottom: 11,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});