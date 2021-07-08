import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
  },
  headerTexts: {
    flexDirection: 'column',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
    bottom: 20
  },
  imagePicker: {
    marginLeft: 70,
    bottom: 70,
    zIndex: 1,
    position: 'absolute'
  },
  title: {
    fontFamily: fonts.text,
    color: colors.title,
    fontSize: 20,
  },
  data: {
    flexDirection: 'row',
  },
  stars: {
    flexDirection: 'row',
    left: '100%',
    position: 'absolute'
  },
  editprofile: {
    left: '90%',
    bottom: 50
  },
  level: {
    margin: 10,
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
});
