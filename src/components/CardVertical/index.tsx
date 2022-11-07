import { v4 } from "uuid";
import React, { useState } from "react";
import * as S from './style';
import { Feather } from '@expo/vector-icons';
import { Sheets } from "../../Screens/Inicio";
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableOpacityProps } from 'react-native'


type Props = {
  data: Sheets
} & TouchableOpacityProps

let counter = 1
function lmaoCount(counter: number) {
  counter++
  Alert.alert(counter.toString())
  console.log(counter)
}






export function CardVertical({ data, ...rest }: Props) {




  function lmaoALert(name: string) {
    Alert.alert(name)
  }



  function handleStore() {


    const id = v4()
    const produtoNome = data[1]
    const produtoDesc = data[2]
    const produtoPreco = data[3]
    const produtoImg = data[4]

    const theProduct = {
      id,
      produtoNome,
      produtoDesc,
      produtoPreco,
      produtoImg
    }


    console.log(theProduct)
  }
  return (



    <S.CardVertical
      type={data} {...rest}

    >

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
        <S.OverFlowVideo />

        <S.VideoIcon>
          <Feather name="play" size={24} color="white" />
        </S.VideoIcon>

      </S.ContainerVideo>

      <S.ContainerButton>
        <S.BuyButton
          // onPress={() => lmaoCount(counter++)}
          onPress={ handleStore }

        >
          <Feather name="plus" size={25} style={{ left: -4 }} color="white" />
          <Feather name="shopping-cart" size={30} style={{ left: -4 }} color="white" />

        </S.BuyButton>

      </S.ContainerButton>



    </S.CardVertical>
  )
};