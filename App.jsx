import React from 'react';
import AppLoading from 'expo-app-loading';

import { ApiProvider } from './src/hooks/auth';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import EStyleSheet from 'react-native-extended-stylesheet';

import Routes from './src/routes';

dayjs.locale('pt-br');
EStyleSheet.build();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });
  
  if (!fontsLoaded) return <AppLoading />;
  return (
    <ApiProvider>
      <Routes />
    </ApiProvider>
  );
}
