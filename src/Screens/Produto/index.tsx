import { v4 } from "uuid";
import React, { useEffect } from "react";
import {
  MaterialIcons,
  Entypo,
  Feather
} from '@expo/vector-icons';
import * as S from './style';
import { Sheets } from "../Inicio";
import api from "../../../services/api";
import { StyleSheet, Alert, Button } from "react-native";
import { useState, useCallback, useRef } from "react";
import { StatusBar } from "../../components/StatusBar";
import YoutubePlayer from "react-native-youtube-iframe";
import { CardHorizontal } from "../../components/CardHorizontal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { QuantityBox } from "../../components/QuantityBox";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";


type RouteParams = {
  item: Sheets
}

let count =1;


export function Produto() {

  const route = useRoute();
  const { item } = route.params as RouteParams

  const productInfo = item;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const [title, setTitle] = useState<Sheets[]>([]);
  useEffect(() => {
    async function getStoreData() {
      await api.get('/getRows').then(function (response) {
        setTitle(response.data); 
      })    
    }
    getStoreData();
  }, []);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.navigate('Produto', { item })

  }

  async function handleStore() {

    try {
      
    

    const id = v4()
    const produtoNome = productInfo[1]
    const produtoDesc = productInfo[2]
    const produtoPreco = productInfo[3]
    const produtoImg = productInfo[4]
    

    const theProduct = {
      id,
      produtoNome,
      produtoDesc,
      produtoPreco,
      produtoImg,
      counter
    }

    const oldProducts = await AsyncStorage.getItem("@saveproducts:cart");
    const previousData = oldProducts ? JSON.parse(oldProducts) : [];

    const allProducts = [...previousData, theProduct]

    await AsyncStorage.setItem("@saveproducts:cart", JSON.stringify(allProducts))
    Toast.show({
      type:'success',
      text1:'Cadastrado com sucesso!'
    })
  } catch (error) {
    console.log(error)      
    Toast.show({
      type:'error',
      text1:'Não foi possível cadastrar'
    })
  }


  }

  const [counter, setCounter] = useState<number>(1);

  function plusQuantity(counting: number){
   count++
      setCounter(count);
 
 }
 
 function minusQuantity(counting: number){
   if(count > 1) {
     count--
     setCounter(count)
   } else {
     setCounter(1)
   }
 
 }

 
// console.log(counter)

  return (

    <S.Container>
      <StatusBar />

      <S.ScrollContainer>

        <S.Carrosel>
          <S.Image
            source={{ uri: `${productInfo[4]}` }}
          ></S.Image>
          <S.ButtonLeft>
            <MaterialIcons name="arrow-back-ios" size={24} color="red" />
          </S.ButtonLeft>
          <S.ButtonRight>
            <MaterialIcons name="arrow-forward-ios" size={24} color="red" />
          </S.ButtonRight>
        </S.Carrosel>

        <S.ThreeDots>
          <Entypo name="dot-single" size={24} color="red" />
          <Entypo name="dot-single" size={24} color="white" />
          <Entypo name="dot-single" size={24} color="white" />
        </S.ThreeDots>

        <S.Prices>
          <S.OriginalPrice>R$ {productInfo[3]}</S.OriginalPrice>
          <S.PromocionalPrice>R$ {productInfo[3]}</S.PromocionalPrice>
        </S.Prices>

        <S.Name>
          <S.Title>Nome:</S.Title>
          <S.BigName>{productInfo[1]}</S.BigName>
        </S.Name>

        <S.ContainerButton>

        <S.QuantityBox>
        <S.QuantityRedBox>
          <S.TitleQuantity>Qtd.</S.TitleQuantity>
        </S.QuantityRedBox>
        <S.QuantityWhiteBox>
          <S.MinusQuantity
          onPress={() => minusQuantity(count)}
          >
          <Feather name="minus" size={25}color="black"
          />

          </S.MinusQuantity>
          <S.QuantityNumber>{counter}</S.QuantityNumber>
          <S.PlusQuantity
          onPress={
            () => plusQuantity(count)
           
          }
            >
          <Feather name="plus" size={25}color="black"/>

          </S.PlusQuantity>
        </S.QuantityWhiteBox>
      </S.QuantityBox>

          <S.ButtonBuy
          onPress={handleStore}
          >
            <S.TextButton>
              Adicionar ao carrinho
            </S.TextButton>
            <Feather name="plus" size={25} style={{ right: 32 }} color="white" />
            <Feather name="shopping-cart" size={30} style={{ right: 28 }} color="white" />
          </S.ButtonBuy>
        </S.ContainerButton>
        <S.Description>
          <S.TitleDesc>DESCRIÇÃO:</S.TitleDesc>
          <S.TextDesc>
          {productInfo[2]}
            </S.TextDesc>
        </S.Description>

        <S.Video>
        <YoutubePlayer
        height={300}
        play={playing}
        videoId={productInfo[5]}
        onChangeState={onStateChange}
      />

        </S.Video>
        <S.Hyperlink>Confira o manual desse item clicando aqui! ↗</S.Hyperlink>

        <S.CardContainer>
      <S.ScrollHorizontal
       horizontal={true}
       data={title}
       keyExtractor={(item: Sheets) => item[0].toString()}
       renderItem={({ item  } : { item: Sheets }) =>
         <CardHorizontal  
          data={item}
          onPress={() => openScreen(item)}
          />
       }>

      </S.ScrollHorizontal>
      </S.CardContainer>

      </S.ScrollContainer>

    </S.Container>

  );
}

