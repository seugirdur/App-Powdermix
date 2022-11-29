import { v4 } from "uuid";
import {
  MaterialIcons,
  Entypo,
  Feather
} from '@expo/vector-icons';
import * as S from './style';
import { Sheets } from "../Inicio";
import { Alert } from "react-native";
import {api} from "../../../services/api";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Toast from 'react-native-toast-message';
import { StatusBar } from "../../components/StatusBar";
import YoutubePlayer from "react-native-youtube-iframe";
import { CardHorizontal } from "../../components/CardHorizontal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type RouteParams = {
  item: Sheets
}

export function Produto() {
  
  const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");
  // const [playing, setPlaying] = useState(false);
  const [counter, setCounter] = useState<number>(1);

  const route = useRoute();
  const { item } = route.params as RouteParams
  const productInfo = item;

  // const onStateChange = useCallback((state: string) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);

  const [title, setTitle] = useState<Sheets[]>([]);
  useEffect(() => {
    async function getStoreData() {
      await api.get('/getRows').then(function (response) {
        setTitle(response.data); 
        console.log("1");
      })    
    }
    console.log("2");
    getStoreData();
  }, []);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.goBack();
    navigation.navigate('Produto', { item });
    // console.log("3");
  }

  const produtoNome = productInfo[1]
  const produtoDesc = productInfo[2]
  const produtoPreco = productInfo[3]
  const produtoImg1 = productInfo[4]
  const produtoImg2 = productInfo[5]
  const produtoImg3 = productInfo[6]
  const produtoVideo = productInfo[7]

  async function handleStore() {
    try {
      console.log("4");
      const id = v4()

      const theProduct = {
        id,
        produtoNome,
        produtoDesc,
        produtoPreco,
        produtoImg1,
        counter
      }

      const oldProducts = await getItem();
      const previousData = oldProducts ? JSON.parse(oldProducts) : [];

      const allProducts = [...previousData, theProduct]

      await setItem(JSON.stringify(allProducts))

      
        Toast.show({
          type: 'success',
          text1: 'Item adicionado!',
          text2: 'Cheque o seu carrinho ou adicione mais produtos!'
        });
      
    
    } catch (error) {
      console.log(error)      
    }
  }


  const formatNumber = (price: number) => {
    console.log("5");

    let priceWithDot = price.toFixed(2)
  
  let str = priceWithDot.toString()
  const replaced1 = str.replace('.', ',');
  
  return "R$ " + replaced1
  }
  

  function plusQuantity(counting: number){
    console.log("6");
    counting++
      setCounter(counting);
 }
 
 function minusQuantity(counting: number){
  console.log("7");
   if(counting > 1) {
    counting--
     setCounter(counting)
   } else {
     setCounter(1)
   }
 }

  return (

    <S.Container>
      <StatusBar />

      <S.ScrollContainer>

        <S.Carrosel>
          <S.Image
            source={{ uri: `${produtoImg1}` }}
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
          <S.OriginalPrice>
            {formatNumber(produtoPreco)}
            </S.OriginalPrice>
          <S.PromocionalPrice>
            {formatNumber(produtoPreco)}
            </S.PromocionalPrice>
        </S.Prices>

        <S.Name>
          <S.Title>Nome:</S.Title>
          <S.BigName>{produtoNome}</S.BigName>
        </S.Name>

        <S.ContainerButton>

        <S.QuantityBox>
        <S.QuantityRedBox>
          <S.TitleQuantity>Qtd.</S.TitleQuantity>
        </S.QuantityRedBox>
        <S.QuantityWhiteBox>
          <S.MinusQuantity
          onPress={() => minusQuantity(counter)}
          >
          <Feather name="minus" size={25}color="black"
          />

          </S.MinusQuantity>
          <S.QuantityNumber>{counter}</S.QuantityNumber>
          <S.PlusQuantity
            onPress={
              () => plusQuantity(counter)
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
          {produtoDesc}
            </S.TextDesc>
        </S.Description>

        <S.Video>
        <YoutubePlayer
        height={300}
        videoId={produtoVideo}
        webViewStyle={ {opacity:0.99} }

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

