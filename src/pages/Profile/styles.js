import StyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: '2rem',
    alignItems: 'center',
  },
  headerTexts: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '5rem',
    height: '5rem',
    borderRadius: '2.5rem',
    margin: '1rem',
    bottom: '1rem'
  },
  title: {
    fontFamily: fonts.text,
    color: colors.title,
    fontSize: '1.5rem',
  },
  data: {
    flexDirection: 'row',
  },
  stars: {
    flexDirection: 'row',
    left: '100%',
    top: '1rem',
    position: 'absolute'
  },
  editprofile: {
    left: Dimensions.get('window').width* 0.6,
    bottom: '4rem'
  },
  dots: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: '2rem',
  },
  level: {
    margin: '1rem',
    marginTop: '2rem',
    bottom: 50,
  },
  levelTexts: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: fonts.text,
    color: colors.title,
    fontSize: 10,
    width: 150
  },
  userXp: {
    marginLeft: '15%',
    fontFamily: fonts.text,
    color: colors.title,
  },
  progressbar: {
    borderRadius: 10,
    height: '20%',
  },
  remainXp: {
    left: '80%',
    bottom: '10%',
    fontFamily: fonts.text,
    color: colors.title,
  },
  modalButtons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  classesView: {
    marginTop: '-15rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  classesTitle: {
    fontSize: 25,
    marginBottom: 10,
    color: colors.heading,
    fontFamily: fonts.text,
  }
});
