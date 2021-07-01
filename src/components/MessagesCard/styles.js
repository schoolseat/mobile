import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1rem',
  },
  image: {
    marginLeft: '1rem',
    borderRadius: 30,
    height: '3rem',
    width: '3rem',
  },
  texts: {
    backgroundColor: colors.heading,
    borderRadius: 30,
    marginLeft: '1rem',
    height: '3rem',
    width: '15rem',
  },
  title: {
    marginLeft: '1rem',
    fontFamily: fonts.heading,
  },
  subject: {
    marginLeft: '1rem',
    fontFamily: fonts.complement,
  },
});
