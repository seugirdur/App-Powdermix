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
     setCounter(count)
}

function minusQuantity(counting: number){
    count > 0 ? setCounter(count) : setCounter(counter);
}
console.log(counter)

    return (
        <S.QuantityBox>
        <S.QuantityRedBox>
          <S.TitleQuantity>Qtd.</S.TitleQuantity>
        </S.QuantityRedBox>
        <S.QuantityWhiteBox>
          <S.MinusQuantity
          onPress={() => minusQuantity(count--)}
          >
          <Feather name="minus" size={25}color="black"
          />

          </S.MinusQuantity>
          <S.QuantityNumber>{counter}</S.QuantityNumber>
          <S.PlusQuantity
          onPress={() => plusQuantity(count++)}
            >
          <Feather name="plus" size={25}color="black"/>

          </S.PlusQuantity>
        </S.QuantityWhiteBox>
      </S.QuantityBox>
    )
}