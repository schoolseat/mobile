import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  greenContainer: {
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  title: {
    fontSize: 30,
    color: colors.white,
    fontFamily: fonts.heading,
    marginTop: getStatusBarHeight(),
  },
  data: {
    marginTop: '2rem',
    paddingHorizontal: '5rem',
  },
  texts: {
    fontSize: 15,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  textsinput: {
    width: '15rem',
    borderBottomWidth: 1,
    marginBottom: '2rem',
    color: colors.heading,
    fontFamily: fonts.text,
    borderBottomColor: colors.heading,
  },
});