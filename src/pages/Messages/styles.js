import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  toggle: {
    marginTop: 15,
    flexDirection: 'row',
    textAlign: 'center',
    alignContent: 'center',
  },
  toggleText: {
    fontFamily: fonts.heading,
    marginLeft: '20%',
    margin: '5%',
  },
  toggleSelectedText: {
    fontFamily: fonts.heading,
    margin: '5%',
    marginLeft: '20%',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  button: {
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: colors.green,
    width: '15%',
    height: '10%',
    borderRadius: 90,
    marginTop: Dimensions.get('window').height * 0.8,
    marginLeft: Dimensions.get('window').width * 0.83,
    position: 'absolute',
  },
  buttonIcon: {
    marginTop: 15,
    marginLeft: 15,
  },
});
