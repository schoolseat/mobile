import StyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: '2rem',
    marginTop: '3rem',
    lineHeight: '2rem',
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  views: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
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
  forgotPass: {
    width: '100%',
    color: colors.blue,
    textAlign: 'right',
    marginTop: '1rem',
    marginRight: '5rem',
  },
  little: {
    width: '100%',
    fontSize: '.6rem',
    textAlign: 'center',
    color: colors.heading,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '1rem',
  },
  lowerView: {
    marginTop: 10,
    alignItems: 'center',
  },
  logonLink: {
    color: colors.blue,
  },
  thermsLink: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
});
