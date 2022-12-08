import { v4 } from "uuid";
import React from "react";
import * as S from "./style";
import { Feather } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");

let counter = 1;
//cards no final da tela de produto
export function CardHorizontal({ data, ...rest }: any) {
  let imagesArr = data[5].split(",");

  const id = v4();
  const produtoNome = data[1];
  const produtoDesc = data[2];
  const produtoPreco = data[3];
  const produtoImg1 = imagesArr[0];

  //função que guarda no carrinho o item clicado
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
        type: "success",
        text1: "Item adicionado!",
        text2: "Cheque o seu carrinho ou adicione mais produtos!",
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
