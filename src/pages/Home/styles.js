import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },
  image: {
    left: 15,
    marginTop: 20,
    marginBottom: 20,
    position: 'absolute',
  },
  classes: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.background,
    marginTop: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.43,
  },
  title: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 10,
    color: colors.title,
    fontFamily: fonts.heading,
  },
});
