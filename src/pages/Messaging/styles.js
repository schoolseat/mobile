import StyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    upperView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around', 
        backgroundColor: colors.gray,
        width: Dimensions.get('window').width * 1,
        height: '4rem'
    },
    lowerView: {
        flexDirection: 'row',
        backgroundColor: colors.gray,
        alignItems: 'center',
        borderRadius: 30,

        marginTop: Dimensions.get('window').height * 0.9,
        width: Dimensions.get('window').width * 0.9,
        height: '3rem',
        position: 'absolute'
    },
    touchable: {
        right: '2rem'
    },
    EmojiSelector: {
        height: Dimensions.get('window').height * 0.5,
        marginTop: Dimensions.get('window').height * 0.4
    },
    name: {},
    image: {

    },
    emoji: {
        fontSize: '1.5rem',
        marginLeft: '1rem',
    },
    input: {
        marginLeft: '1rem',
        marginRight: '1rem',
    },
})