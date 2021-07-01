import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    margin: '1rem',
    marginTop: '1.5rem',

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '1rem',
  },
  day: {
    fontSize: 44,
    marginRight: '.5rem',

    fontFamily: fonts.text,
  },
  today: {
    flexDirection: 'column',
  },
  texts: {
    color: colors.heading,
    fontFamily: fonts.text,
    marginRight: '.1rem',
  },
  text: {
    backgroundColor: colors.green_light,
    color: colors.green,

    alignItems: 'center',
    textAlign: 'center',

    fontFamily: fonts.text,
    padding:  '.4rem',
    borderRadius: 10,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:  '-1rem',
  },
  days: {
    margin: '1rem',
    borderRadius:  '1rem',
  },
  daysText: {
    fontSize:  '.7rem',
    color: colors.heading,
    fontFamily: fonts.text,
  },
  daysDay: {
    fontSize: '1rem',
    fontFamily: fonts.heading,
  },
  SelectedDay: {
    fontSize: '1rem',
    borderRadius:  '.8rem',
    margin: 5,
    padding: 10,
    backgroundColor: colors.orange,
  },
  SelectedDaysText: {
    fontSize:  '.7rem',
    color: colors.white,
    fontFamily: fonts.text,
  },
  SelectedDaysDay: {
    color: colors.white,
    fontFamily: fonts.heading,
  },
  Cards: {
    flexDirection: 'column',
    marginTop: '-2rem',
  },
  ScrollViewButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },  
  ScrollViewTexts: {
    flexDirection: 'row',
  },
  SelectedScrollViewText: {
    marginLeft: '3rem',
    marginBottom: '1rem',
    fontFamily: fonts.complement,
    color: colors.heading,
    borderBottomWidth: 1,
    borderBottomColor: colors.heading
  },
  ScrollViewText: {
    marginLeft: '3rem',
    marginBottom: '1rem',
    fontFamily: fonts.complement,
    color: colors.heading
  },
  noClass: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 100
  },
  noClassText: {
    fontFamily: fonts.text,
    color: colors.title
  },
});
