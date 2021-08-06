import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    headerContent: {
        width: '100%',
        height: 104,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: fonts.heading,
        alignSelf: 'center',
        fontSize: 25,
        color: colors.white,
    },
    titleView: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: -30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    inputsView: {
        textAlign: 'center',
        flexDirection: 'column',
        marginBottom: 10,
        width: '100%',
    },
    texts: {
        color: colors.white,
        fontFamily: fonts.heading
    },
    textsinput: {
        fontFamily: fonts.text,
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});