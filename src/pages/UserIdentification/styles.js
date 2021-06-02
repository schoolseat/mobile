import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
     flex: 1, 
    },
    wrapper: {
      justifyContent: 'space-around', 
      alignItems: 'center',
      paddingHorizontal: 20
    },
    title: {
      fontSize: 28,
      textAlign: 'center',
      color: colors.heading,
      marginTop: '20%',
      fontFamily: fonts.heading,
      lineHeight: 34,
    },
    image: {
      marginTop: 10,
    },
    views: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: colors.gray
    },
    inputs: {
      margin: 15,
      padding: '1%',
      width: '50%',
    },
    forgotPass: {
      color: colors.blue,
      width: '100%',
      textAlign: 'right',
      margin: 10
    },
    little: {
      fontSize: 10,
      width: '100%',
      color: colors.heading,
      textAlign: 'center',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    logonLink: {
      color: colors.blue
    },
    thermsLink:{
      color: colors.blue,
      textDecorationLine: 'underline'
    }
  })
  