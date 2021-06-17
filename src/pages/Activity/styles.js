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
    position: 'absolute'
  },
  scrollContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: Dimensions.get('window').width * 0.7,
    textAlign: 'center',
    backgroundColor: colors.white
  },
  title: {
    marginTop: 30,
    marginLeft: 30,
    color: colors.title,
    fontFamily: fonts.heading,
  },
  subTitle: {
    marginTop: 10,
    marginLeft: 30,
    color: colors.title,
    fontFamily: fonts.text,
  },
  text: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  button: {
    marginTop: 20,
    marginLeft: 100,
  },
  backButton: {
    margin: 10,
    width: 30,
  }
});