import React from 'react';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_200ExtraLight,
    Nunito_900Black
  } from '@expo-google-fonts/nunito';


import { Routes } from './src/Routes'

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_200ExtraLight,
    Nunito_900Black
})

if(!fontsLoaded){
  <AppLoading/>
}

  return (
    <Routes/>
  );
}