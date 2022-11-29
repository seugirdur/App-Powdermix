import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import theme from "../../global/styles/theme";
import { HeaderEnviarCart } from "../HeaderEnviarCart";
import { formatNumber } from "../StatusBar";
import * as S from "./style";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { CartProps } from "../CardVertical";
import { Feather, EvilIcons } from "@expo/vector-icons";

export function CartConfirm() {
  const navigation = useNavigation();
  const [cart, setCart] = useState<CartProps[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");

  const seeCart = useCallback(async () => {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    // const lmao = data;
    // console.log(lmao)
    // lmao.forEach(element => {
    //   console.log(element.produtoPreco * element.counter);
    // });
    setCart([...data]);
    return [...data];
  }, []);

  const sumEverything = useCallback(async () => {
    let precofinal = 0;
    const myarray = await seeCart();
    myarray.forEach((element) => {
      precofinal += element.produtoPreco * element.counter;
      // console.log(precofinal);
    });
    setPrice(precofinal);
  }, []);

  useEffect(() => {
    seeCart();
    sumEverything();
  }, []);

  // sumEverything();
  return (
    <S.Container>
      <HeaderEnviarCart title="Seu pedido" />

      <S.TitlesContainer>
        <S.TitleName>Nome do produto:</S.TitleName>
        <S.TitleQuantity>Quantidade</S.TitleQuantity>
        <S.TitlePrice>Preço Final</S.TitlePrice>
      </S.TitlesContainer>

      {/* {cart.forEach(element => {
        <Text style={{fontSize:48}}>{element.produtoDesc}</Text>
      })} */}

      <FlatList
        extraData={cart}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            // <S.CardCartBorder>
            //   <S.CardCart type={cart}>
            //     <S.ContainerImage>
            //       <S.ProdutoImage source={{ uri: item.produtoImg1 }} />
            //     </S.ContainerImage>

            //     <S.ContainerText>
            //       <S.Qtd>
            //         {item.counter}x {item.counter > 1 ? "unidades" : "unidade"}
            //       </S.Qtd>
            //       <S.Titulo> {item.produtoNome} </S.Titulo>
            //     </S.ContainerText>

            //     <S.ContainerTextPrice>
            //       <S.Price>
            //         {formatNumber(item.produtoPreco, item.counter)}
            //       </S.Price>
            //     </S.ContainerTextPrice>

            //     <S.CircleClose>
            //       <EvilIcons
            //         name="close"
            //         size={24}
            //         color={theme.colors.gray700}
            //       />
            //     </S.CircleClose>
            //   </S.CardCart>
            // </S.CardCartBorder>

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
