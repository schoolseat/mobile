import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    margin: '10%',

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '5%',
  },
  day: {
    fontSize: 44,
    marginRight: '5%',

    fontFamily: fonts.text,
  },
  today: {
    flexDirection: 'column',
  },
  texts: {
    color: colors.heading,
    fontFamily: fonts.text,
    marginRight: 5,
  },
  text: {
    backgroundColor: colors.green_light,
    color: colors.green,

    alignItems: 'center',
    textAlign: 'center',

    fontFamily: fonts.text,
    padding: 6,
    borderRadius: 10,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  days: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  daysText: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  daysDay: {
    fontFamily: fonts.heading,
  },
  SelectedDay: {
    borderRadius: 10,
    margin: 5,
    padding: 10,
    backgroundColor: colors.orange,
  },
  SelectedDaysText: {
    color: colors.white,
    fontFamily: fonts.text,
  },
  SelectedDaysDay: {
    color: colors.white,
    fontFamily: fonts.heading,
  },
  Cards: {
    flexDirection: 'column',
    margin: 0,
    marginTop: -35,
  },
  ScrollView: {
    flex: 1,
  },
  ScrollViewButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },  
  ScrollViewTexts: {
    flexDirection: 'row',
  },
  ScrollViewText: {
    marginRight: '20%',
    fontFamily: fonts.complement,
    color: colors.heading
  }
});
