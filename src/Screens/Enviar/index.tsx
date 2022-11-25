import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import  Toast  from "react-native-toast-message";
import { api2 } from "../../../services/api";
import { CartProps } from "../../components/CardVertical";
import { CartConfirm } from "../../components/CartConfirm";
import { HeaderEnviarCart } from "../../components/HeaderEnviarCart";
import { InfoConfirm } from "../../components/InfoConfirm";
import * as S from './style'
import AsyncStorage from "@react-native-async-storage/async-storage";



export function Enviar() {
    const [cart, setCart] = useState<CartProps[]>([]);

    const [name, setName] = useState<string>("lmao");
    const [cpf, setCpf] = useState<string>("lmao");
    const [email, setEmail] = useState<string>("lmao");
    const [cep, setCep] = useState<string>("lmao");
    const [smartphone, setSmartphone] = useState<string>("lmao");


    async function postTrello() {
        const getInfo = await AsyncStorage.getItem("@saveinfo:personalinfo")
        const getCart = await AsyncStorage.getItem("@saveproducts:cart")
        // const response = await getInfo;
        const personalInfo = getInfo ? JSON.parse(getInfo) : [];
        setName(personalInfo.name)
        setCpf(personalInfo.cpf)
        setEmail(personalInfo.email)
        setCep(personalInfo.cep)
        setSmartphone(personalInfo.smartphone)
        // console.log(personalInfo)

        const cartItems: CartProps[] = getCart ? JSON.parse(getCart) : [];
        
        let produtos="";

        for(let i = 0; i < cartItems.length; i++) {
          produtos += "Produto: " + cartItems[i].produtoNome + ", \n"
          + "Preço: " + cartItems[i].produtoPreco + ", \n"
          + "Quantidade: " + cartItems[i].counter + ", \n"

        }
        const myBrazilianDate = new Date().toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo"})

      //   function dataAtualFormatada(){
      //     var data = new Date(),
      //         dia  = data.getDate().toString().padStart(2, '0'),
      //         mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      //         ano  = data.getFullYear();
      //     return dia+"/"+mes+"/"+ano;
      // }
      // const date = new Date().toLocaleTimeString();


        await api2.post("", {
          name:personalInfo.name,
          desc:"Nome: " + personalInfo.name + "\n"
          + "CPF/CNPJ: " + personalInfo.cpf + "\n"
          + "Email: " + personalInfo.email + "\n"
          + "CEP: " + personalInfo.cep + "\n"
          + "Telefone/Celular: " + personalInfo.smartphone + "\n" + "\n"
          + "Pedido: \n"+ produtos + "\n\n"
          + "Hora do Pedido: \n"+ myBrazilianDate
          + "\n",
        //   + personalInfo.name + "\n"
        //   + personalInfo.name + "\n",
          idList:"637ca9c85c09a903cffd99eb"
      })

      Toast.show({
        type: 'success',
        text1: 'Pedido enviado!',
        text2: 'Nossa equipe entrará em contato com você!'
      });

      }

    function enviarPedido() {
        
    }

    return (
        <>
        <InfoConfirm/>
        <CartConfirm/>
        <S.TextWarning>* entraremos em contato via whatsapp após o pedido, para combinar o frete</S.TextWarning>
        <S.ButtonEnviar
        onPress={postTrello}
        >
            <S.EnviarText
            >
                Enviar pedido
            </S.EnviarText>
        </S.ButtonEnviar>

        </>
    )
}