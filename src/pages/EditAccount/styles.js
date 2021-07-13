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
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.complement,
        fontSize: 25,
        color: colors.heading,
      },
    image: {
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