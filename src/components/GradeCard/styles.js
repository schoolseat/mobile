import StyleSheet from 'react-native-extended-stylesheet';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        marginTop: '.5rem',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '-1rem',
        paddingVertical: '1rem',
        paddingHorizontal: '1.5rem',
    },
    imageView: {
        marginRight: '1rem',
        width: '3rem',
        height: '3rem',
        borderRadius: '1.5rem',
        backgroundColor: colors.shape,
    },
    image: {
        width: '3rem',
        height: '3rem',
        borderRadius: '1.5rem',
    },
    nameView: {
        height: '3rem',
        width: '15rem',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: '5rem',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
    name: {
        fontSize: '1.3rem',
        color: colors.title,
        fontFamily: fonts.text,
    }
})