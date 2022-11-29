import React, { useCallback, useEffect, useState } from "react";
import { Button, FlatList, Linking, Text, View } from "react-native";
import {
  useRoute,
  DrawerActions,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { StatusBar } from "../../components/StatusBar";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto, Entypo } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

import * as S from "./style";
import logo from "../../assets/onlyname.png";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { SalesProps } from "../Enviar";
import { CartProps } from "../../components/CardVertical";
import { EmailProps } from "../../components/FormEmail";
//yarn add @types/react -D
// import { styles } from './styles';

const { getItem, setItem } = useAsyncStorage("@savesales:sale");

export function Pedidos() {
  const [pedidos, setPedidos] = useState<SalesProps[]>([]);

  const loadPedidos = async () => {
    const getPedidos = await getItem();

    const allPedidos: SalesProps[] = getPedidos ? JSON.parse(getPedidos) : [];
    // console.log(allPedidos[0].cartItems[1].produtoNome);
    setPedidos(allPedidos);
  };

  const navigation = useNavigation();

  function openScreen() {
    // navigation.goBack();
    navigation.navigate("Enviar");
  }

  // const navigation = useNavigation();
  // const route = useRoute();

  // useEffect(() => {

  // }, []);

  const HandleRedoCheckout = async (redoCartItems: CartProps[]) => {
    console.log(redoCartItems);

    const redoString = JSON.stringify(redoCartItems);

    await AsyncStorage.setItem("@saveproducts:cart", redoString);
    // console.log(redoString);

    openScreen();
  };

  const SendEmail = (venda: SalesProps) => {

    let produtos = "";

    let precoTotal = 0;

  

    for (let i = 0; i < venda.cartItems.length; i++) {
      produtos +=
        "Produto: " +
        venda.cartItems[i].produtoNome +
        ", \n" +
        "Preço: R$" +
        (Math.round(venda.cartItems[i].produtoPreco * 100) / 100).toFixed(2) +
        ", \n" +
        "Quantidade: " +
        venda.cartItems[i].counter +
        ", \n";

      precoTotal += venda.cartItems[i].produtoPreco * venda.cartItems[i].counter;
    }
    // function addHours(date: Date, hours: number) {
    //   date.setHours(date.getHours() + hours);
    //   const makeitworkgoddamn = date.toUTCString();

    //   return makeitworkgoddamn;
    // }
    // // Date(Date.UTC()
    // const someDate = new Date();
    // // .toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"})
    // // .getTimezoneOffset()

    // const dataCompleta = addHours(someDate, -3);

    MailComposer.composeAsync({
      subject: "Pedido dia - " + venda.dataCompleta,
      body: "Nome - " + venda.personalInfo.name + '\n' +
            "CPF/CNPJ - " + venda.personalInfo.cpf + '\n' +
            "CEP - " + venda.personalInfo.cep + '\n' +
            "Celular/Telefone - " + venda.personalInfo.smartphone + '\n' +
            produtos + '\n',
      recipients: ["contato@powdermix.com.br"],
    });
  };

  useFocusEffect(
    useCallback(() => {
      loadPedidos();
      // console.log("lmao")
    }, [])
  );

  return (
    <S.Container>
      <StatusBar />

      <S.WholeScreen>
        <S.ContentContainer>
          <FlatList
            ListHeaderComponent={
              <>
                <S.TitleHistoric>Pedidos</S.TitleHistoric>
              </>
            }
            //  extraData={}
            data={pedidos}
            extraData={pedidos}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <S.FlatlistContainer>
                  <S.CardHistoric>
                    <S.TopRow>
                      <S.TitleRow>
                        <S.TitleCard>Compra - </S.TitleCard>
                        <S.DateTitle>{item.dataCompra}</S.DateTitle>
                      </S.TitleRow>
                      <S.IconRow>
                        <S.CircleZap
                          onPress={() =>
                            Linking.openURL(
                              "https://api.whatsapp.com/send?phone=5511991745936&text=Pedido+referente+a+"+item.dataCompleta.replace(" ","+")+"+do+"+item.personalInfo.name.replace(" ","+")
                            )
                          }
                        >
                          <Fontisto
                            name="whatsapp"
                            size={24}
                            color="white"
                            style={{ top: -1 }}
                          />
                        </S.CircleZap>

                        <S.CircleMail
                        onPress={() => {
                          SendEmail(item);
                        }}
                        >
                          <Fontisto
                            name="email"
                            size={24}
                            color="white"
                            style={{ top: -1 }}
                          />
                        </S.CircleMail>
                      </S.IconRow>
                    </S.TopRow>
                    <S.TableTitle>
                      <S.EmptyImage />
                      <S.NomeLabel>Nome do{"\n"}produto:</S.NomeLabel>
                      <S.QtdLabel>Quantidade:</S.QtdLabel>
                      <S.PrecoLabel>Preço{"\n"}Final:</S.PrecoLabel>
                    </S.TableTitle>

                    <FlatList
                      data={item.cartItems}
                      renderItem={(item2) => (
                        <S.NestedContentContainer>
                          <S.ContainerImgProduto>
                            <S.ImgProduto
                              source={{ uri: item2.item.produtoImg1 }}
                            />
                          </S.ContainerImgProduto>

                          <S.ProdutoNomeContainer>
                            <S.ProdutoNome>
                              {item2.item.produtoNome}
                            </S.ProdutoNome>
                          </S.ProdutoNomeContainer>

                          <S.QuantidadeProdutoContainer>
                            <S.QuantidadeProduto>
                              {item2.item.counter}
                            </S.QuantidadeProduto>
                          </S.QuantidadeProdutoContainer>

                          <S.PrecoFinalContainer>
                            <S.PrecoFinal>
                              R${" "}
                              {(
                                Math.round(
                                  item2.item.produtoPreco *
                                    item2.item.counter *
                                    100
                                ) / 100
                              ).toFixed(2)}
                            </S.PrecoFinal>
                          </S.PrecoFinalContainer>
                        </S.NestedContentContainer>
                      )}
                    />

                    <S.ContainerTotal>
                      <S.Total>
                        <S.TotalwithLine>
                          <S.TotalLabelContainer>
                            <S.TotalLabel>TOTAL:</S.TotalLabel>
                          </S.TotalLabelContainer>
                          <S.TotalValues>
                            <S.PriceContainer>
                              <S.PriceQuantity>
                                R${" "}
                                {(
                                  Math.round(item.precoTotal * 100) / 100
                                ).toFixed(2)}
                              </S.PriceQuantity>
                            </S.PriceContainer>
                            <S.FreteContainer>
                              <S.FreteText>+ frete</S.FreteText>
                            </S.FreteContainer>
                          </S.TotalValues>
                        </S.TotalwithLine>
                        <S.ContainerLine>
                          <S.Line></S.Line>
                        </S.ContainerLine>
                      </S.Total>

                      <S.RefazerContainer
                        onPress={() => {
                          HandleRedoCheckout(item.cartItems);
                        }}
                      >
                        <S.Refazer>REFAZER PEDIDO</S.Refazer>
                      </S.RefazerContainer>
                    </S.ContainerTotal>
                  </S.CardHistoric>
                </S.FlatlistContainer>
              );
            }}
          />
        </S.ContentContainer>
      </S.WholeScreen>
    </S.Container>
  );
}
