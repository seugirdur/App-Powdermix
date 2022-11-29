import * as Font from 'expo-font';
import {
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_200ExtraLight,
    Nunito_900Black,
    Nunito_700Bold
  } from '@expo-google-fonts/nunito';

export async function realUseFonts() {
  await Font.loadAsync({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_200ExtraLight,
    Nunito_900Black,
    Nunito_700Bold
  });
};