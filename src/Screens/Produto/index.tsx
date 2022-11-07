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
import { StyleSheet, Alert } from "react-native";
import { useState, useCallback, useRef } from "react";
import { StatusBar } from "../../components/StatusBar";
import YoutubePlayer from "react-native-youtube-iframe";
import { CardHorizontal } from "../../components/CardHorizontal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

type RouteParams = {
  item: Sheets
}

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

  function openScreen() {
    navigation.navigate('Produto')
  }

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
          <S.OriginalPrice>R$ {productInfo[3]},00</S.OriginalPrice>
          <S.PromocionalPrice>R$ {productInfo[3]},00</S.PromocionalPrice>
        </S.Prices>

        <S.Name>
          <S.Title>Nome:</S.Title>
          <S.BigName>{productInfo[1]}</S.BigName>
        </S.Name>

        <S.ContainerButton>

          <S.ButtonBuy>
            <S.TextButton>
              Adicionar ao carrinho
            </S.TextButton>
            <Feather name="plus" size={25} style={{ left: 12 }} color="white" />
            <Feather name="shopping-cart" size={30} style={{ left: 8 }} color="white" />
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
            height={260}
            play={playing}
            videoId={"lvkyaRVKcZk"}
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
          // onPress={() => openScreen()}

          />
       }>

      </S.ScrollHorizontal>
      </S.CardContainer>

      </S.ScrollContainer>

    </S.Container>

  );
}


