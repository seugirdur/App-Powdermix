import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_200ExtraLight,
  Nunito_900Black,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import * as Font from "expo-font";
import { Routes } from "./src/Routes";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import { realUseFonts } from "./src/hooks/useFonts";
import {
  TapGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await realUseFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  onLayoutRootView();

  return <Routes />;
}
