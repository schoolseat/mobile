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
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  teacherPfp: {
    width: '3rem',
    height: '3rem',
    borderRadius: '1.5rem',
    marginRight: '1rem'
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
  buttons: {
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
  },
  selectedText: {
    fontFamily: fonts.complement,
    color: colors.heading,
    marginRight: 180,
    borderBottomColor: colors.heading,
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: fonts.complement,
    color: colors.heading,
    marginRight: 180,
  },
  modalButtons: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  }
});
