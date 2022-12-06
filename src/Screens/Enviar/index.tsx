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
import { useNavigation } from "@react-navigation/native";

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
    // Date(Date.UTC()
    // const someDate = (new Date())
    // // .toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"})
    // // .getTimezoneOffset()

    // const dataCompleta = addHours(someDate, -3);

    // console.log(dataCompleta);

    // .toLocaleTimeString("pt-BR", {timeZone: "America/Bahia"})

    // const today = new Date(); // Thu Feb 18 2021 12:55:04 GMT-0300 (Brasilia Standard Time)

    // console.log(new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric'} ).format(today));

    // console.log(myBrazilianDate)

    Toast.show({
      type: "error",
      text1: "Pedido Cancelado",
      // text2: 'Nossa equipe entrará em contato com você!'
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
    // const response = await getInfo;
    const personalInfo: InfoProps = getInfo ? JSON.parse(getInfo) : [];
    // setName(personalInfo.name)
    // setCpf(personalInfo.cpf)
    // setEmail(personalInfo.email)
    // setCep(personalInfo.cep)
    // setSmartphone(personalInfo.smartphone)
    // console.log(personalInfo)

    const cartItems: CartProps[] = getCart ? JSON.parse(getCart) : [];
    // console.log(cartItems);
    // console.log(cartItems[1].produtoNome)

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

    // console.log(precoTotal);

    //   function dataAtualFormatada(){
    //     var data = new Date(),
    //         dia  = data.getDate().toString().padStart(2, '0'),
    //         mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    //         ano  = data.getFullYear();
    //     return dia+"/"+mes+"/"+ano;
    // }
    // const date = new Date().toLocaleTimeString();

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
        "Hora do Pedido: \n" +
        myBrazilianDate +
        "\n",
      //   + personalInfo.name + "\n"
      //   + personalInfo.name + "\n",
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
      // Date(Date.UTC()
      const someDate = new Date();
      // .toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"})
      // .getTimezoneOffset()

      const dataCompleta = addHours(someDate, -3);

      // console.log(dataCompleta);

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

      // console.log(allSales[1].cartItems[1]);

      setShowLoading(false);

      openScreen();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <>
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
    // </>
  );
}
