import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    margin: 10,
    elevation: 5,
    width: '10rem',
    height: '2rem',
    borderRadius: 16,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});
