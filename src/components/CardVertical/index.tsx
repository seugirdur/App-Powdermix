import React from "react";
import * as S from './style';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Nunito_400Regular,
    Nunito_600SemiBold
  } from '@expo-google-fonts/nunito';



export function CardVertical() {
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_600SemiBold
    })
    
    if(!fontsLoaded){
      <AppLoading/>
    }

    return (
        
        <S.CardVertical>
            
        <S.ProdutoImage
        source={{ uri: `https://powdermix.com.br/wp-content/uploads/2022/05/quem-somos-1024x684.jpg` }}

        />
        <S.Titulo> Teste </S.Titulo>

        </S.CardVertical>
    )
};