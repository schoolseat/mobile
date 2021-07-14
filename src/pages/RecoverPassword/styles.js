import { Dimensions } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
  },
  wrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    color: colors.heading,
    marginTop: '3rem',
    fontFamily: fonts.heading,
    lineHeight: '2rem',
  },
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.gray,
    marginBottom: '2rem',
  },
  icons: {
    marginRight: '1rem',
    marginTop: '2rem',
  },
  lefticons: {
    marginTop: '2rem',
  },
  inputs: {
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.6,
    marginTop: '2rem',
  },
  little: {
    marginTop: '2rem',
    fontFamily: fonts.complement,
    color: colors.heading,
  }
});