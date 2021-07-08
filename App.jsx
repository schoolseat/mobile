/* eslint-disable camelcase */
import React , { useEffect } from 'react';
import AppLoading from 'expo-app-loading';

import { ApiProvider } from './src/hooks/auth';
import { LogBox } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import EStyleSheet from 'react-native-extended-stylesheet';
import Routes from './src/routes';

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
$textColor: '#0275d8',
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });
  
  useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  if (!fontsLoaded) return <AppLoading />;
  return (
    <ApiProvider>
      <Routes />
    </ApiProvider>
  );
}
