import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerContent: {
    height: 104,
    paddingHorizontal: '3rem',
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.complement,
    fontSize: 25,
    color: colors.heading,
  },
});