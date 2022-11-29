import React, { useCallback, useEffect, useState } from 'react';
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
  import * as Font from "expo-font";
import { realUseFonts } from './src/hooks/useFonts'
import { Routes } from './src/Routes'
import { Toast } from 'react-native-toast-message/lib/src/Toast';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await realUseFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  onLayoutRootView();


  // const FontLoading = async () => {
  //   await realUseFonts(); // Font is being loaded here
  // };


//   const [fontsLoaded] = useFonts({
//     Nunito_400Regular,
//     Nunito_600SemiBold,
//     Nunito_200ExtraLight,
//     Nunito_900Black,
//     Nunito_700Bold
// })

//   if (fontsLoaded) {
//     SplashScreen.hideAsync();
//   }


// if(!fontsLoaded){
//   <AppLoading/>
// }

// if (!IsReady) {
//   return (
//     <AppLoading
//       startAsync={FontLoading}
//       onFinish={() => SetIsReady(true)}
//       onError={() => {}}
//     />
//   );
// } else {
  
// }

  return (
    <Routes
    // onLayout={onLayoutRootView}
    />
    
  );
}