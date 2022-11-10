import React, { useState } from "react"
import * as S from './style';
import {
    MaterialIcons,
    Entypo,
    Feather
  } from '@expo/vector-icons';
import { Alert } from "react-native";
let count =1;

export function QuantityBox() {

    const [counter, setCounter] = useState<number>(1);

 function plusQuantity(counting: number){
  count++
     setCounter(count)
}

function minusQuantity(counting: number){
  if(count > 1) {
    count--
    setCounter(count)
  } else {
    setCounter(1)
  }
}
console.log(counter)

    return (
        <S.QuantityBox>
        <S.QuantityRedBox>
          <S.TitleQuantity>Qtd.</S.TitleQuantity>
        </S.QuantityRedBox>
        <S.QuantityWhiteBox>
          <S.MinusQuantity
          onPress={() => minusQuantity(count)}
          >
          <Feather name="minus" size={25}color="black"
          />

          </S.MinusQuantity>
          <S.QuantityNumber>{counter}</S.QuantityNumber>
          <S.PlusQuantity
          onPress={() => plusQuantity(count)}
            >
          <Feather name="plus" size={25}color="black"/>

          </S.PlusQuantity>
        </S.QuantityWhiteBox>
      </S.QuantityBox>
    )
}