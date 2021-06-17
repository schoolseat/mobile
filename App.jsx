/* eslint-disable camelcase */
import React from 'react';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import EStyleSheet from 'react-native-extended-stylesheet';
 
EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});
import Routes from './src/routes';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) return <AppLoading />;
  return (
    <Routes />
  );
}
