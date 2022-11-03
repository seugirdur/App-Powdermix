import * as React from 'react'
import { FlatList} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { FontAwesome5 } 
from '@expo/vector-icons';
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

export function Inicio( ) {
const [title, setTitle]=useState([]);
useEffect(() => {
  async function getStoreData() {
    const response = await api.get('/getRows').then(function (response) {

      console.log(response.data);
      const result = response.data;

      

      
    // const $ = cheerio.load(urlResponse.data);
    // $('li.article').each((i, element) => {
    //   const link = $(element).find('a.overlay')
    //   .attr('href');
    //   const header = $(element)
    //   .find('a')
    //   .text()
    //   .split("    \n")[0];
    //   console.log(header);
    // })
    })
  }
  getStoreData();

  // const lmao = api.get('/getRows')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
})

  //   useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // api.get('').then(urlResponse => {
  //   const $ = cheerio.load(urlResponse.data);

  //   $('li.article').each((i, element) => {
  //     const link = $(element).find('a.overlay')
  //     .attr('href');

  //     const header = $(element)
  //     .find('a')
  //     .text()
  //     .split("    \n")[0];

  //     console.log(header);
  //   })
  // })

  const navigation = useNavigation();


function openScreen() {
  navigation.navigate('Produto')

}

function openDrawer() {
  navigation.dispatch(DrawerActions.openDrawer());
}

  return (
    <S.Container>

      {/* <S.StatusBar>

        <S.Hamburguer
        onPress={openDrawer}
        >
          <FontAwesome5 name="bars" size={24} color="#000"/>

        </S.Hamburguer>
        <S.Logo
        source={logo}
        ></S.Logo>
        <S.SquareRound>

        <Feather name="shopping-cart" size={40} color="white" />
        </S.SquareRound>
   
      </S.StatusBar> */}

      <StatusBar/>
      

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
           data={result}
           keyExtractor={}
           renderItem={} */}
          
         
        {/* /> */}
    </S.Container>

  );
}


