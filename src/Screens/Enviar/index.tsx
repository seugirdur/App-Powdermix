import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import  Toast  from "react-native-toast-message";
import { api2 } from "../../../services/api";
import { CartProps } from "../../components/CardVertical";
import { CartConfirm } from "../../components/CartConfirm";
import { HeaderEnviar } from "../../components/HeaderEnviar";
import { InfoConfirm } from "../../components/InfoConfirm";
import * as S from './style'
import AsyncStorage from "@react-native-async-storage/async-storage";


// const getInfo = const { getItem } = useAsyncStorage("@saveinfo:personalinfo");



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
        console.log(personalInfo)

        const cartItems = getCart ? JSON.parse(getCart) : [];
        

        await api2.post("", {
          name:personalInfo.name,

          desc:personalInfo.name + "\n"
          + personalInfo.cpf + "\n"
          + personalInfo.email + "\n"
          + personalInfo.cep + "\n"
          + personalInfo.smartphone + "\n"
          + getCart + "\n",
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