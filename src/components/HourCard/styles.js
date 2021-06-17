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
      left: '2.5rem',
      height: '22rem',
      width: '36rem',
      marginTop: '1rem',
      marginBottom: '-13rem',
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
    },
    SelectedClasses: {
      backgroundColor: colors.cards_selected_background,
      borderRadius: 20,
      width: '50%',
      height: '40%',
    },
    SelectedHeading: {
      color: colors.white,
      fontFamily: fonts.heading,

      marginLeft: '10%',
      marginTop: '5%',
    },
    SelectedContent: {
      color: colors.white,
      fontSize: 12,
      fontFamily: fonts.text,

      marginLeft: '10%'
    },
    classesName: {
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '5%',
      fontFamily: fonts.heading
    },
    classesContent: {
      fontSize: 12,
      fontFamily: fonts.text,

      marginLeft: '10%'
    },
    SelectedData: {
      marginTop: '5%',
      marginLeft: '10%',

      fontFamily: fonts.complement,
      color: colors.white,
      fontSize: 12,
    },
    classesNumber: {
      marginLeft: '10%',
      fontFamily: fonts.complement,
      fontSize: 12,

    },
    classesTName: {
      marginTop: '5%',
      marginLeft: '10%',
      fontFamily: fonts.complement,
      fontSize: 12,
    },
    icons: {
      marginLeft: '5%',
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
  noActivity: {
    color: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  noActivityText: {
    fontSize: 999
  }
})