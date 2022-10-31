import * as React from 'react'
import { FlatList, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as cheerio from 'cheerio';


import { Feather } from '@expo/vector-icons';

import { StatusBar } from '../../components/StatusBar';
import { CardVertical } from '../../components/CardVertical';
import * as S from './style'
import logo from '../../assets/onlyname.png'
import api from '../../../services/api';
import { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-screens';



const produtos= [
    {
      id:"001",
      desc:["mouse", '25.00']
    },
    {
      id:"002",
      desc:["teclado", '25.00']
    },
    {
      id:"003",
      desc:["Monitor", '25.00']
    },
  ]

export function Inicio() {
  const [title, setTitle] = useState<Items[]>([]);
  useEffect(() => {
    async function getStoreData() {
      const response = await api.get('/getRows').then(function (response) {

        // console.log(response.data);
        const { results } = response.data;

      
        
        setTitle(response.data);


      })

      

      
    }

  
    getStoreData();

  }, [])

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

      {/* <CardVertical/> */}
      {/* <FlatList
        data={title}
        keyExtractor={item=>item[0].lmao}
        renderItem={({item}) => <S.Text > lmao:{item[1]} </S.Text> }


      /> */}

      <SearchBar></SearchBar>

      <S.CardContainer>

<FlatList
        data={title}
        keyExtractor={item=>item[0].toString()}
        renderItem={({item}) => <S.Text > lmao:{item[0]} </S.Text> }


      />
      </S.CardContainer>
    </S.Container>

  );
}


