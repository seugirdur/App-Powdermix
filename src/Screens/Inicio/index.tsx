import * as React from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { FontAwesome5 } 
from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { Feather } from '@expo/vector-icons'; 

import * as S from './style'
import logo from '../../assets/onlyname.png'

export function Inicio( ) {
  const navigation = useNavigation();


function openScreen() {
  navigation.navigate('Produto')

}

function openDrawer() {
  navigation.dispatch(DrawerActions.openDrawer());
}

  return (
    <S.Container>

      <S.StatusBar>

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
   
      </S.StatusBar>

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
           <Entypo name="dot-single" size={24} color="red" />
           <Entypo name="dot-single" size={24} color="white" />
           <Entypo name="dot-single" size={24} color="white" />
           </S.ThreeDots>

      <S.Flatlist></S.Flatlist>
    </S.Container>

  );
}


