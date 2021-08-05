import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

export default StyleSheet.create({
  overlay: {
    marginTop: getStatusBarHeight(),
  },
  container: {
    backgroundColor: colors.overlay
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  }
});