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
        height: 104,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fonts.heading,
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
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        flexDirection: 'column',
    },
    texts: {
        color: colors.white,
        fontFamily: fonts.heading
    },
    textsinput: {
        marginBottom: 10,
        color: colors.white,
        borderBottomWidth: 1,
        fontFamily: fonts.text,
        borderBottomColor: colors.white,
    },
    button: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});