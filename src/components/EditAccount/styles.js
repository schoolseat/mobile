import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    title: {
        fontFamily: fonts.heading,
        alignSelf: 'center',
        fontSize: 25,
        color: colors.white,
    },
    titles: {
        fontFamily: fonts.heading,
        alignSelf: 'center',
        fontSize: 20,
        color: colors.white,
    },
    titleView: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    inputsView: {
        textAlign: 'center',
        flexDirection: 'column',
        marginBottom: 10,
        width: '100%',
    },
    texts: {
        fontSize: 15,
        color: colors.white,
        fontFamily: fonts.text
    },
    textsinput: {
        fontFamily: fonts.text,
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        marginBottom: 10
    },
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 11
    }
});