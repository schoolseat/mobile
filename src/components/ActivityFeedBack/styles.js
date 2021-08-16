import StyleSheet from 'react-native-extended-stylesheet';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        paddingVertical: 15,
        textAlign: 'center',
        paddingHorizontal: 15,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '.5rem',
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fonts.heading,
    },
    text: {
        marginTop: '.5rem',
        fontSize: '1.1rem',
        color: colors.white,
        marginBottom: '.5rem',
        fontFamily: fonts.text,
    },
    stars: {
        flexDirection: 'row',
        marginBottom: '.5rem',
      },
    textsinput: {
        width: '20rem',
        marginBottom: '.5rem',
        color: colors.white,
        borderBottomWidth: 1,
        fontFamily: fonts.text,
        borderBottomColor: colors.white,
    },
    button: {
        width: '100%',
        marginTop: '.5rem',
        alignItems: 'center',
        marginBottom: '.5rem',
    }
})