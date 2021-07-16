import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    card: {
      alignContent: 'center',
      left: '10rem',
      height: '22rem',
      marginTop: '-2rem',
      margin: -40,
      marginBottom: -160,
    },
    longCard: {
      alignContent: 'center',
      left: '2.5rem',
      height: '22rem',
      width: '36rem',
      marginTop: '1rem',
      marginBottom: '-13rem',
    },
    firstLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    TouchableOpacity: {
      height: '100%',
      width: 20,
    },
    dots: {
      color: colors.heading,
      fontFamily: fonts.heading,
      fontSize: 25,
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
      backgroundColor: colors.cards_background,
      borderRadius: 20,
      width: '50%',
      height: '40%',
      paddingHorizontal: 30,
    },
    classesName: {
      marginTop: '5%',
      fontFamily: fonts.heading
    },
    classesContent: {
      fontSize: 12,
      fontFamily: fonts.text,
    },
    classesNumber: {
      fontFamily: fonts.complement,
      fontSize: 12,
    },
    classesTName: {
      marginTop: '5%',
      marginLeft: '10%',
      fontFamily: fonts.complement,
      fontSize: 12,
    }, 
    data: {
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
      height: 70,
      backgroundColor: colors.red,
      marginTop: 30,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      right: 20,
  },
})
