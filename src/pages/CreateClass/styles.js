import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  greenContainer: {
    backgroundColor: colors.green,
    alignItems: 'center',
  },
  title: {
    marginTop: getStatusBarHeight(),
    fontFamily: fonts.heading,
    fontSize: 30,
    color: colors.white,
  },
  data: {
    marginTop: '2rem',
    paddingHorizontal: '5rem',
  },
  texts: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 15,
  },
  textsinput: {
    fontFamily: fonts.text,
    color: colors.heading,
    width: '15rem',
    borderBottomColor: colors.heading,
    borderBottomWidth: 1,
    marginBottom: '2rem',
  },
});