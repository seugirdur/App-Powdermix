import React, { useState } from "react";
import { FlatList } from "react-native";
import theme from "../../global/styles/theme";
import { HeaderEnviar } from "../HeaderEnviar";
import { formatNumber } from "../StatusBar";
import * as S from "./style";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { CartProps } from "../CardVertical";
import { Feather, EvilIcons } from "@expo/vector-icons";

export function CartConfirm() {

    const navigation = useNavigation();
    const [cart, setCart] = useState<CartProps[]>([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");
  

    async function seeCart() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setCart([...data]);
}

seeCart()


  return (
    <S.Container>
      <HeaderEnviar title="Produtos" />

      <FlatList
        ListHeaderComponent={
          <>
            <S.TitleCart> Carrinho de Compras </S.TitleCart>
          </>
        }
        extraData={cart}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <S.CardCartBorder>
              <S.CardCart type={cart}>
                <S.ContainerImage>
                  <S.ProdutoImage source={{ uri: item.produtoImg1 }} />
                </S.ContainerImage>

                <S.ContainerText>
                  <S.Qtd>
                    {item.counter}x {item.counter > 1 ? "unidades" : "unidade"}
                  </S.Qtd>
                  <S.Titulo> {item.produtoNome} </S.Titulo>
                </S.ContainerText>

                <S.ContainerTextPrice>
                  <S.Price>
                    {formatNumber(item.produtoPreco, item.counter)}
                  </S.Price>
                </S.ContainerTextPrice>

                <S.CircleClose>
                  <EvilIcons
                    name="close"
                    size={24}
                    color={theme.colors.gray700}
                  />
                </S.CircleClose>
              </S.CardCart>
            </S.CardCartBorder>
          );
        }}
      />
    </S.Container>
  );
}
