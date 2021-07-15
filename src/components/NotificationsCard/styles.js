import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: '.5rem',
    paddingHorizontal: '3rem',
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.title
  },
  subTitle: {
    color: colors.heading,
    fontFamily: fonts.complement,
  },
});
