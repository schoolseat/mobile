import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: colors.green,

  },
  image: {
    left: 15,
    marginTop: 20,
    marginBottom: 20,
    position: 'absolute',
  },
  scrollContainer: {
    alignItems: 'center',
    textAlign: 'justify',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
    height: Dimensions.get('window').height * 0.5,
    marginTop: Dimensions.get('window').width * 0.7,
  },
  titlesContainer: {
    alignItems: 'center',
    textAlign: 'justify',
  },
  title: {
    marginTop: 20,
    color: colors.title,
    fontFamily: fonts.heading,
  },
  subTitle: {
    marginTop: 10,
    color: colors.title,
    fontFamily: fonts.text,
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    width: 30,
    margin: 10,
    marginTop: getStatusBarHeight(),
  },
});
