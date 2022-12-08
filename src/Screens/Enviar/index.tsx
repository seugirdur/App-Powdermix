import { v4 } from "uuid";
import * as S from "./style";
import { Alert } from "react-native";
import React, { useState } from "react";
import { api2 } from "../../../services/api";
import Toast from "react-native-toast-message";
import { InfoProps } from "../../components/Form";
import { FlatList } from "react-native-gesture-handler";
import { CartProps } from "../../components/CardVertical";
import { CartConfirm } from "../../components/CartConfirm";
import { InfoConfirm } from "../../components/InfoConfirm";
import { LoadingPage } from "../../components/LoadingPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderEnviarCart } from "../../components/HeaderEnviarCart";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export type SalesProps = {
  id: string;
  personalInfo: InfoProps;
  cartItems: CartProps[];
  dataCompra: string;
  dataCompleta: string;
  precoTotal: number;
};

//Tela de envio para o trello
export function Enviar() {
  const [showLoading, setShowLoading] = useState(false);

  const Error = () => {
    function addHours(date: Date, hours: number) {
      date.setHours(date.getHours() + hours);
      date.setDate(date.getDate() - 20);
      const makeitworkgoddamn = date.toUTCString();

      return makeitworkgoddamn;
    }

    Toast.show({
      type: "error",
      text1: "Orçamento Cancelado",
    });
  };

  const ConfirmAlert = () => {
    Alert.alert(
      "Enviar orçamento?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => Error(),
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => postTrello(),
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );
  };

  const navigation = useNavigation();

  function openScreen() {
    navigation.goBack();
  }
  //funcao de envio para o trello
  async function postTrello() {
    setShowLoading(true);
    const getInfo = await AsyncStorage.getItem("@saveinfo:personalinfo");
    const getCart = await AsyncStorage.getItem("@saveproducts:cart");
    const personalInfo: InfoProps = getInfo ? JSON.parse(getInfo) : [];

    const cartItems: CartProps[] = getCart ? JSON.parse(getCart) : [];

    let produtos = "";

    let precoTotal = 0;

    for (let i = 0; i < cartItems.length; i++) {
      produtos +=
        "Produto: " +
        cartItems[i].produtoNome +
        ", \n" +
        "Preço: R$" +
        (Math.round(cartItems[i].produtoPreco * 100) / 100).toFixed(2) +
        ", \n" +
        "Quantidade: " +
        cartItems[i].counter +
        ", \n";

      precoTotal += cartItems[i].produtoPreco * cartItems[i].counter;
    }
    const myBrazilianDate = new Date().toLocaleTimeString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    function padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }

    function formatDate(date: Date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    }

    const dataCompra = formatDate(new Date());

    const id = v4();

    await api2.post("", {
      name: personalInfo.name,
      desc:
        "Pedido nº" +
         id.substring(0,4) +
         "\n" +
        "Nome: " +
        personalInfo.name +
        "\n" +
        "CPF/CNPJ: " +
        personalInfo.cpf +
        "\n" +
        "Email: " +
        personalInfo.email +
        "\n" +
        "CEP: " +
        personalInfo.cep +
        "\n" +
        "Telefone/Celular: " +
        personalInfo.smartphone +
        "\n" +
        "\n" +
        "Produtos: \n" +
        produtos +
        "\n\n" +
        "Data e Hora do Pedido: \n" +
        myBrazilianDate +
        "\n" +
        dataCompra +
        "\n",
      idList: "637ca9c85c09a903cffd99eb",
    });

    Toast.show({
      type: "success",
      text1: "Orçamento enviado!",
      text2: "Nossa equipe entrará em contato com você!",
    });

    const nothing: never[] = [];
    const nothingbutinstring = JSON.stringify(nothing);

    await AsyncStorage.setItem("@saveproducts:cart", nothingbutinstring);

    try {
      

      function padTo2Digits(num: number) {
        return num.toString().padStart(2, "0");
      }

      function formatDate(date: Date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join("/");
      }

      const dataCompra = formatDate(new Date());

      function addHours(date: Date, hours: number) {
        date.setHours(date.getHours() + hours);
        const makeitworkgoddamn = date.toUTCString();

        return makeitworkgoddamn;
      }
      const someDate = new Date();

      const dataCompleta = addHours(someDate, -3);

      const Sales: SalesProps = {
        id,
        personalInfo,
        cartItems,
        dataCompra,
        dataCompleta,
        precoTotal,
      };

      const oldSales = await AsyncStorage.getItem("@savesales:sale");
      const previousSales = oldSales ? JSON.parse(oldSales) : [];
      const allSales: SalesProps[] = [Sales, ...previousSales];
      await AsyncStorage.setItem("@savesales:sale", JSON.stringify(allSales));

      setShowLoading(false);

      openScreen();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <InfoConfirm />
      <CartConfirm />
      <S.TextWarning>
        * entraremos em contato via whatsapp após o pedido, para combinar o
        frete
      </S.TextWarning>
      <S.ButtonEnviar onPress={ConfirmAlert}>
        <S.EnviarText>Enviar orçamento</S.EnviarText>
      </S.ButtonEnviar>
      {showLoading ? <LoadingPage /> : null}
    </S.Container>
  );
}
