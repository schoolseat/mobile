import StyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: '2rem',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTexts: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '5rem',
    bottom: '1rem',
    height: '5rem',
    margin: '1rem',
    borderRadius: '2.5rem',
  },
  title: {
    fontSize: '1.5rem',
    color: colors.title,
    fontFamily: fonts.text,
  },
  data: {
    flexDirection: 'row',
  },
  stars: {
    top: '1rem',
    left: '100%',
    position: 'absolute',
    flexDirection: 'row',
  },
  editprofile: {
    bottom: '4rem',
    left: Dimensions.get('window').width* 0.6,
  },
  dots: {
    fontSize: '2rem',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  level: {
    bottom: 50,
    margin: '1rem',
    marginTop: '2rem',
  },
  levelTexts: {
    flexDirection: 'row',
  },
  text: {
    width: 150,
    fontSize: 10,
    color: colors.title,
    fontFamily: fonts.text,
  },
  userXp: {
    marginLeft: '15%',
    color: colors.title,
    fontFamily: fonts.text,
  },
  progressbar: {
    height: '20%',
    borderRadius: 10,
  },
  remainXp: {
    left: '80%',
    bottom: '10%',
    color: colors.title,
    fontFamily: fonts.text,
  },
  modalButtons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  classesView: {
    marginTop: '-10rem',
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
