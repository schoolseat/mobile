import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import AppLoading from 'expo-app-loading';
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';
import { ApiProvider } from './src/hooks/auth';

EStyleSheet.build();
dayjs.locale('pt-br');

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
