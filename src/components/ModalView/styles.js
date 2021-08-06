import StyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

export default StyleSheet.create({
  overlay: {
    marginTop: getStatusBarHeight(),
  },
  container: {
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
    backgroundColor: colors.orange
  },
  bar: {
    width: '7rem',
    height: '.2rem',
    borderRadius: '3.5rem',
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: '2rem',
    marginBottom: 10
  }
});