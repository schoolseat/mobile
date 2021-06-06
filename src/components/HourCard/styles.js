import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    card: {
      alignContent: 'center',
      left: 150,
      height: 350,
      marginTop: -20,
      margin: -40,
      marginBottom: -150
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
      height: '40%'
    },
    SelectedClasses: {
      backgroundColor: colors.cards_selected_background,
      borderRadius: 20,
      width: '50%',
      height: '40%'
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
      marginTop: '5%',
      fontFamily: fonts.heading
    },
    classesContent: {
      fontSize: 12,
      fontFamily: fonts.text,

      marginLeft: '10%'
    },
    SelectedData: {
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
      left: 10,
      top: 5,
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
  }
})