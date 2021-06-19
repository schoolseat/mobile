import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  backIcon: {
    marginLeft: 10,
    marginRight: 5,
  },
  discipline: {
    fontFamily: fonts.heading,
    fontSize: 24,
  },
  teacherView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  teacherPfp: {
    marginLeft: 10,
    marginRight: 5,
  },
  teacherName: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  schoolName: {
    color: colors.heading,
    fontFamily: fonts.text,
    marginLeft: 45,
  },
  buttons: {
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20
  },
  selectedText: {
    fontFamily: fonts.complement,
    color: colors.heading,
    marginRight: 180,
    borderBottomColor: colors.heading,
    borderBottomWidth: 1
  },
  text: {
    fontFamily: fonts.complement,
    color: colors.heading,
    marginRight: 180,
  }
})