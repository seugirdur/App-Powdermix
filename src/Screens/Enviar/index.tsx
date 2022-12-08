import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { api2 } from "../../../services/api";
import { CartProps } from "../../components/CardVertical";
import { CartConfirm } from "../../components/CartConfirm";
import { HeaderEnviarCart } from "../../components/HeaderEnviarCart";
import { InfoConfirm } from "../../components/InfoConfirm";
import * as S from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { v4 } from "uuid";
import { InfoProps } from "../../components/Form";
import { LoadingPage } from "../../components/LoadingPage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export type SalesProps = {
  id: string;
  personalInfo: InfoProps;
  cartItems: CartProps[];
  dataCompra: string;
  dataCompleta: string;
  precoTotal: number;
};

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
      text1: "Pedido Cancelado",
    });
  };

  const ConfirmAlert = () => {
    Alert.alert(
      "Enviar Pedido?",
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


    await api2.post("", {
      name: personalInfo.name,
      desc:
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
        "Pedido: \n" +
        produtos +
        "\n\n" +
        "Data e Hora do Pedido: \n" +
        myBrazilianDate +
        "\n" +
        dataCompra +
        "\n"
        ,

      idList: "637ca9c85c09a903cffd99eb",
    });

    Toast.show({
      type: "success",
      text1: "Pedido enviado!",
      text2: "Nossa equipe entrará em contato com você!",
    });

    const nothing: never[] = [];
    const nothingbutinstring = JSON.stringify(nothing);

    await AsyncStorage.setItem("@saveproducts:cart", nothingbutinstring);

    try {
      const id = v4();

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
      const allSales: SalesProps[] = [...previousSales, Sales];
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
        <S.EnviarText>Enviar pedido</S.EnviarText>
      </S.ButtonEnviar>
      {showLoading ? <LoadingPage /> : null}
    </S.Container>

  );
}
