import React from "react";
import * as S from "./style";
import AppLoading from "expo-app-loading";
import { Sheets } from "../../Screens/Inicio";
import { Alert, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";
import Toast from "react-native-toast-message";

import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { v4 } from "uuid";


const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");


let counter = 1;

export function CardHorizontal({ data, ...rest }: any) {

  let imagesArr = data[4].split(',');

  const id = v4();
  const produtoNome = data[1];
  const produtoDesc = data[2];
  const produtoPreco = data[3];
  const produtoImg1 = imagesArr[0];

  

  async function handleStore() {
    try {
      const theProduct = {
        id,
        produtoNome,
        produtoDesc,
        produtoPreco,
        produtoImg1,
        counter,
      };

      const oldProducts = await getItem();
      const previousData = oldProducts ? JSON.parse(oldProducts) : [];
      const allProducts = [...previousData, theProduct];
      await setItem(JSON.stringify(allProducts));

      Toast.show({
        type: 'success',
        text1: 'Item adicionado!',
        text2: 'Cheque o seu carrinho ou adicione mais produtos!'
      });

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <S.CardHorizontal type={data} {...rest}>
      <S.ContainerImage>
        <S.ProdutoImage source={{ uri: produtoImg1 }} />
      </S.ContainerImage>

      <S.ContainerText>
        <S.Titulo>{produtoNome}</S.Titulo>
        <S.Desc>{produtoDesc}</S.Desc>
        {/* <S.Price>R${produtoPreco}</S.Price> */}
      </S.ContainerText>
      <S.ContainerButton>
        <S.BuyButton onPress={handleStore}>
          <Feather name="plus" size={25} style={{ left: -4 }} color="white" />
          <Feather
            name="shopping-cart"
            size={30}
            style={{ left: -4 }}
            color="white"
          />
        </S.BuyButton>
      </S.ContainerButton>
    </S.CardHorizontal>
  );
}
