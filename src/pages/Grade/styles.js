import StyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    width: '100%',
    height: '5rem',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    paddingTop: getStatusBarHeight(),
  },
  title: {
    flex: 1,
    marginLeft: 20,
    fontSize: '2rem',
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  dots: {
    fontSize: '2.5rem',
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  headerDataView: {
    marginTop: '.5rem',
    flexDirection: 'column',
    paddingHorizontal: '1.5rem'
  },
  teacherView: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherPfp: {
    width: '3rem',
    height: '3rem',
    marginRight: '1rem',
    borderRadius: '1.5rem',
  },
  teacherName: {
    fontSize: '1.2rem',
    color: colors.heading,
    fontFamily: fonts.text,
  },
  schoolName: {
    marginTop: '.5rem',
    fontSize: '1.2rem',
    color: colors.heading,
    fontFamily: fonts.text,
  },
  bio: {
    width: '10rem',
    flexWrap: 'wrap',
    fontSize: '1rem',
    marginTop: '.5rem',
    flexDirection: 'row',
    color: colors.heading,
    alignItems: 'flex-start', 
    fontFamily: fonts.complement,
  },
  buttons: {
    marginTop: 20,
    marginLeft: 45,
    marginRight: 45,
    flexDirection: 'row',
  },
  selectedText: {
    marginRight: 180,
    borderBottomWidth: 1,
    color: colors.heading,
    fontFamily: fonts.complement,
    borderBottomColor: colors.heading,
  },
  text: {
    marginRight: 180,
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  modalButtons: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  }
});
