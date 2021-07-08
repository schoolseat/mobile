import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: colors.green,
  },
  image: {
    marginTop: 35,
    marginBottom: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.4,
    position: 'absolute',
  },
  scrollContainer: {
    alignItems: 'center',
    textAlign: 'justify',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
    paddingHorizontal: 20,
    marginBottom: 20,
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    marginTop: 20,
    margin: 10,
    width: 30,
  },
});
