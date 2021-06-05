import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
     flex: 1, 
    },
    header: {
        flexDirection: 'row',
        marginTop: "10%",
        alignItems: 'center'
    },
    headerTexts: {
        flexDirection: 'column',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        margin: 10,
    },
    title: {
        fontFamily: fonts.text,
        color: colors.title,
        fontSize: 20
    },
    data: {
        flexDirection: 'row',
    },
    stars: {
        flexDirection: 'row',
        left: "80%"
    },
    level: {
        margin: 10
    },
    levelTexts: {
        flexDirection: 'row',
    },
    text: {
        fontFamily: fonts.text,
        color: colors.title
    },
    userXp: {
        marginLeft: "15%",
        fontFamily: fonts.text,
        color: colors.title
    },
    progressbar: {
        borderRadius: 10,
        height: "20%",
    },
    remainXp: {
        left: "80%",
        bottom: "10%",
        fontFamily: fonts.text,
        color: colors.title
    }
})