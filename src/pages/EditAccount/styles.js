import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        marginHorizontal: 20,
        textAlign: 'center',
    },
    headerContent: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: fonts.complement,
        alignSelf: 'center',
        fontSize: 25,
        color: colors.heading,
    },
    titleView: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
    },
    icon: {
        alignSelf: 'flex-start',
    },
    image: {
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
        color: colors.heading,
        fontFamily: fonts.complement
    },
    textsinput: {
        fontFamily: fonts.text,
        borderBottomColor: colors.heading,
        borderBottomWidth: 1,
    },
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});