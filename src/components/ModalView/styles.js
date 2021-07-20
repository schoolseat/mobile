import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight(),
      },
      overlay: {
        flex: 1,
        backgroundColor: colors.overlay
      },
      bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: colors.white,
        alignSelf: 'center',
        marginTop: 13,
      }
});