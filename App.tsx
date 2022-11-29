import React, { useCallback } from 'react';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_200ExtraLight,
    Nunito_900Black,
    Nunito_700Bold
  } from '@expo-google-fonts/nunito';
  import * as SplashScreen from 'expo-splash-screen';

import { Routes } from './src/Routes'
import { Toast } from 'react-native-toast-message/lib/src/Toast';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_200ExtraLight,
    Nunito_900Black,
    Nunito_700Bold
})

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }


if(!fontsLoaded){
  <AppLoading/>
}

  return (
    <Routes/>
    
  );
}