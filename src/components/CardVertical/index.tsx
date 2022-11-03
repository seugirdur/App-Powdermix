import React from "react";
import * as S from './style';
import AppLoading from 'expo-app-loading';
import { Sheets } from "../../Screens/Inicio";
import { TouchableOpacityProps } from 'react-native'
import { Feather  } from '@expo/vector-icons';
import theme from "../../global/styles/theme";


type Props = {
    data: Sheets
} & TouchableOpacityProps

export function CardVertical({data,...rest} : any) {
  

    return (
        
        <S.CardVertical type={data} {...rest}>

            <S.ContainerImage>
        <S.ProdutoImage
        source={{ uri: data[4] }}

        />
        </S.ContainerImage>

        <S.ContainerText>
        <S.Titulo> {data[1]} </S.Titulo>
        <S.Desc> {data[2]} </S.Desc>
        </S.ContainerText>

        <S.ContainerVideo>

            <S.Video
                source={{ uri: data[4] }}            
            />
            <S.OverFlowVideo/>

            <S.VideoIcon>
            <Feather name="play" size={24} color="white" />
            </S.VideoIcon>
            
        </S.ContainerVideo>

        <S.ContainerButton>
            <S.BuyButton>
            <Feather name="plus" size={25} style={{left:-4}} color="white" />
            <Feather name="shopping-cart" size={30} style={{left:-4}} color="white" />

            </S.BuyButton>
        </S.ContainerButton>

        

        </S.CardVertical>
    )
};