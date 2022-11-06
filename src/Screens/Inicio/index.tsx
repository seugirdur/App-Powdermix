import * as React from 'react'
import { v4 } from 'uuid';
import * as S from './style'
import { FlatList } from 'react-native';
import 'react-native-get-random-values';
import api from '../../../services/api';
import { Entypo } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-screens';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from '../../components/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { CardVertical } from '../../components/CardVertical';
import { IProductObject } from '../../business/models/interfaces/IProduct';


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
      await api.get('/getRows').then(function (response) {
        setTitle(response.data);

        // console.log(response.data);
        // const { results } = response.data;
        // let arr = response.data;
        // let test: Sheets[] = [];
        // return arr.map(function(item: Sheets) {
        //   test.push(item);
        //   // console.log(item)
        // })

      })
    }
    getStoreData();
  }, []);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.navigate('Produto', { item })

  }


  return (
    <S.Container>

      <StatusBar />


      <S.Carrosel>
        <S.Image
          source={{ uri: `https://powdermix.com.br/wp-content/uploads/2022/05/quem-somos-1024x684.jpg` }}
        />
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

      <SearchBar></SearchBar>

      <S.CardContainer>

        <FlatList
          data={title}
          keyExtractor={item => item[0].toString()}
          renderItem={({ item }) =>
            <CardVertical
              data={item}
              onPress={() => openScreen(item)}


            />
          }
        />

      </S.CardContainer>
    </S.Container>

  );
}


