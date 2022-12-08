import * as S from "./style";
import { CartProps } from "../CardVertical";
import { formatNumber } from "../StatusBar";
import { FlatList, Text } from "react-native";
import theme from "../../global/styles/theme";
import { HeaderEnviarCart } from "../HeaderEnviarCart";
import { Feather, EvilIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export function CartConfirm() {
  const navigation = useNavigation();
  const [cart, setCart] = useState<CartProps[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");

  const seeCart = useCallback(async () => {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];

    setCart([...data]);
    return [...data];
  }, []);

  const sumEverything = useCallback(async () => {
    let precofinal = 0;
    const myarray = await seeCart();
    myarray.forEach((element) => {
      precofinal += element.produtoPreco * element.counter;
    });
    setPrice(precofinal);
  }, []);

  let num = 0;

  useEffect(() => {
    seeCart();
    sumEverything();
    num++;
  }, []);

  if ((num = 2)) {
    useFocusEffect(() => {
      sumEverything();
    });
  }

  return (
    <S.Container>
      <HeaderEnviarCart title="Seu pedido" />

      <S.TitlesContainer>
        <S.TitleName>Nome do produto:</S.TitleName>
        <S.TitleQuantity>Quantidade</S.TitleQuantity>
        <S.TitlePrice>Preço Final</S.TitlePrice>
      </S.TitlesContainer>

      <FlatList
        extraData={cart}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <S.FlatlistContainer>
              <S.ContainerCartList>
                <S.ProductNameContainer>
                  <S.ProductName>{item.produtoNome}</S.ProductName>
                </S.ProductNameContainer>
                <S.QuantityContainer>
                  <S.Quantity>{item.counter}</S.Quantity>
                </S.QuantityContainer>
                <S.PrecoContainer>
                  <S.Preco>
                    R$
                    {(
                      Math.round(item.produtoPreco * item.counter * 100) / 100
                    ).toFixed(2)}
                  </S.Preco>
                </S.PrecoContainer>
              </S.ContainerCartList>
              <S.Line />
            </S.FlatlistContainer>
          );
        }}
      />
      <S.FinalPriceContainer>
        <S.FinalPriceTitle>SUBTOTAL:</S.FinalPriceTitle>
        <S.ContainerValues>
          <S.FinalPriceValue>
            R${(Math.round(price * 100) / 100).toFixed(2)}
          </S.FinalPriceValue>
          <S.FinalPriceFrete>+ FRETE*</S.FinalPriceFrete>
        </S.ContainerValues>
      </S.FinalPriceContainer>
    </S.Container>
  );
}
