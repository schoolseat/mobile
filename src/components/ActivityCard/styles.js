import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    card: {
      margin: -40,
      left: '10rem',
      height: '22rem',
      marginTop: '-2rem',
      marginBottom: -160,
      paddingHorizontal: 15,
      alignContent: 'center',
    },
    longCard: {
      left: '2.5rem',
      width: '36rem',
      height: '22rem',
      marginTop: '1rem',
      alignContent: 'center',
      marginBottom: '-13rem',
    },
    firstLine: {
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    TouchableOpacity: {
      top: '10%',
      left: '190%',
      width:  '50%',
      height: '100%',
      alignItems: 'center',
    },
    dots: {
      fontSize: 25,
      lineHeight: 15,
      color: colors.heading,
      fontFamily: fonts.heading,
    },
    hours: {
      top: '20%',
      right: '20%',
    },
    startHour: {
      fontSize: 20,
    },
    finishHour: {
      color: colors.heading
    },
    classes: {
      width: '50%',
      height: '40%',
      borderRadius: 20,
      paddingHorizontal: 30,
      backgroundColor: colors.cards_background,
    },
    classesName: {
      marginTop: '5%',
      fontFamily: fonts.heading
    },
    classesContent: {
      fontSize: 12,
      fontFamily: fonts.text,
      marginBottom: '-1rem'
    },
    classesNumber: {
      fontSize: 12,
      marginLeft: '5%',
      fontFamily: fonts.complement,
    },
    classesTName: {
      fontSize: 12,
      marginLeft: '5%',
      fontFamily: fonts.complement,
    }, 
    data: {
      marginTop: '.5rem',
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
    },
    teacherPic: {
      width: 30,
      height: 30,
      marginTop: 10,
      left: 10,
      borderRadius: 50,
    },
    options: {
      right: 20,
      height: 70,
      marginTop: 30,
      borderRadius: 20,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.red,
  },
})
