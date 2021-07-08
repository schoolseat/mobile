import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    width: '100%',
    height: 104,
    paddingHorizontal: 15,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.title700,
    fontSize: 25,
    color: colors.heading,
  },
  teacherView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  teacherPfp: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 5,
  },
  teacherName: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  schoolName: {
    color: colors.heading,
    fontFamily: fonts.text,
    marginLeft: 45.5,
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
});
