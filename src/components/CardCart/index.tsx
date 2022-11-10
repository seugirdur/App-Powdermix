import { v4 } from "uuid";
import React, { useState } from "react";
import * as S from './style';
import { Feather } from '@expo/vector-icons';
import { Sheets } from "../../Screens/Inicio";
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableOpacityProps } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QuantityBox } from "../QuantityBox";
// import { Toast } from "react-native-toast-message/lib/src/Toast";

type Props = {
  product: CartProps
} & TouchableOpacityProps


export type CartProps = {
  id: string;
  produtoNome: string;
  produtoDesc: string;
  produtoPreco: number;
  produtoImg: string;
}

let counter = 1
function lmaoCount(counter: number) {
  counter++
  Alert.alert(counter.toString())
  console.log(counter)
}

export function CardCart({ product, ...rest }: Props) {

  function lmaoALert(name: string) {
    Alert.alert(name)
  }

  return (

    <S.CardCartBorder>

    <S.CardCart
      type={product} {...rest}

    >

      <S.ContainerImage>
        <S.ProdutoImage
          source={{ uri: product.produtoImg }}

        />
      </S.ContainerImage>

      <S.ContainerText>
        <S.Qtd>1x unidade</S.Qtd>
        <S.Titulo> {product.produtoNome} </S.Titulo>
      </S.ContainerText>

        <QuantityBox/>
      <S.ContainerTextPrice>
      <S.Price> R$ {product.produtoPreco} </S.Price>
      </S.ContainerTextPrice>



    </S.CardCart>
    </S.CardCartBorder>
  )
};