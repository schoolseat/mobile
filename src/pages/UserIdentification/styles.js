import StyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  forgotPass: {
    color: colors.blue,
    width: '100%',
    textAlign: 'right',
    marginTop: '2rem',
    marginRight: '5rem',
  },
  button: {
    marginTop: '1rem',
  },
  FieldError: {
    marginTop: '2rem',
  }
});
