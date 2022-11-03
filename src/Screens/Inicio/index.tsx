import * as React from 'react'
import { FlatList, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { v4 } from 'uuid';
import 'react-native-get-random-values';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { StatusBar } from '../../components/StatusBar';
import { CardVertical } from '../../components/CardVertical';
import * as S from './style'
import logo from '../../assets/onlyname.png'
import api from '../../../services/api';
import { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-screens';

import AppLoading from 'expo-app-loading';




export type Sheets = {
  [0]: number,
  [1]: string,
  [2]: string,
  [3]: number,
  [4]: string
}

export function Inicio() {

  

  const [produtoNome, SetProdutoNome] = useState<string>();
  const [produtoDesc, SetProdutoDesc] = useState<string>();
  const [produtoPreco, SetProdutoPreco] = useState<number>();
  const [produtoImg, SetProdutoImg] = useState<string>();

  const id = v4();

  const newProduct = {
    id,
    produtoNome,
    produtoDesc,
    produtoPreco,
    produtoImg
  }
  

  const [title, setTitle] = useState<Sheets[]>([]);
  useEffect(() => {
    async function getStoreData() {
      const response = await api.get('/getRows').then(function (response) {

        // console.log(response.data);
        const { results } = response.data;
        let arr = response.data;
        let test: Sheets[] = [];
        return arr.map(function(item: Sheets) {
          test.push(item);
          setTitle(response.data);  
          // console.log(item)
        })





       


      })
     
    }


    getStoreData();

  }, [])


  

  // console.log(newProduct);




  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Produto')

  }

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }




  return (
    <S.Container>

      <StatusBar />


      <S.Carrosel>
        <S.Image
          source={{ uri: `https://powdermix.com.br/wp-content/uploads/2022/05/quem-somos-1024x684.jpg` }}

        ></S.Image>
        <S.ButtonLeft>
          <MaterialIcons name="arrow-back-ios" size={24} color="red" />
        </S.ButtonLeft>
        <S.ButtonRight>
          <MaterialIcons name="arrow-forward-ios" size={24} color="red" />
        </S.ButtonRight>
      </S.Carrosel>

      <S.ThreeDots>
        <Entypo name="dot-single" size={24} color="red" onPress={openScreen} />
        <Entypo name="dot-single" size={24} color="white" />
        <Entypo name="dot-single" size={24} color="white" />

      </S.ThreeDots>

      <SearchBar></SearchBar>

      <S.CardContainer>

        <FlatList
          data={title}
          keyExtractor={item => item[0].toString()}
          renderItem={({ item }) =>
            <CardVertical
             data={item}
             
             />
          }
        />

      </S.CardContainer>
    </S.Container>

  );
}


