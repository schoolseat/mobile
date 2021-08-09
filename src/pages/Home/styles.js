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
    backgroundColor: colors.background,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.43,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  classesCards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  }
});
