import { Dimensions } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getStatusBarHeight(),
  },
  header: {
    marginTop: '1rem',
    textAlign: 'center',
    flexDirection: 'row',
    paddingVertical: '1.5rem',
    justifyContent: 'space-between',
  },
  backButton: {
    right: '1rem'
  },
  title: {
    fontSize: '2rem',
    lineHeight: '2rem',
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: '2rem',
    borderColor: colors.gray,
  },
  icons: {
    marginTop: '2rem',
    marginRight: '1rem',
  },
  lefticons: {
    marginTop: '2rem',
  },
  inputs: {
    marginTop: '2rem',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.6,
  },
  little: {
    marginTop: '2rem',
    color: colors.heading,
    fontFamily: fonts.complement,
  }
});