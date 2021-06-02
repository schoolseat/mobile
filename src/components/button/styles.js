import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export default StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.06,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        // filter: dropShadow(0, 4, 4, rgba(0, 0, 0, 0.25))
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})