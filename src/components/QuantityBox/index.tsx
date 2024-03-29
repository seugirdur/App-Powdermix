import * as S from "./style";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type QuantityProps = {
  quantity: number;
} & TouchableOpacityProps;

export function QuantityBox({ quantity }: QuantityProps) {
  const [counter, setCounter] = useState<number>(quantity);

  function plusQuantity(counting: number) {
    counting++;
    setCounter(counting);
  }

  function minusQuantity(counting: number) {
    if (counting > 1) {
      counting--;
      setCounter(counting);
    } else {
      setCounter(1);
    }
  }

  return (
    <S.QuantityBox>
      <S.QuantityRedBox>
        <S.TitleQuantity>Qtd.</S.TitleQuantity>
      </S.QuantityRedBox>
      <S.QuantityWhiteBox>
        <S.MinusQuantity onPress={() => minusQuantity(counter)}>
          <Feather name="minus" size={25} color="black" />
        </S.MinusQuantity>
        <S.QuantityNumber>{counter}</S.QuantityNumber>
        <S.PlusQuantity onPress={() => plusQuantity(counter)}>
          <Feather name="plus" size={25} color="black" />
        </S.PlusQuantity>
      </S.QuantityWhiteBox>
    </S.QuantityBox>
  );
}
