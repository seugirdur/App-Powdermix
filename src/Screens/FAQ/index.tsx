import * as React from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native'
import { FontAwesome5 } 
from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { Feather } from '@expo/vector-icons'; 

import * as S from './style'
import logo from '../../assets/onlyname.png'
//yarn add @types/react -D
// import { styles } from './styles';

type ParamsProps = {
  name: string;
}


function openDrawer() {
  const navigation = useNavigation();

  navigation.dispatch(DrawerActions.openDrawer());
}

export function FAQ() {
const navigation = useNavigation();
const route = useRoute();
  
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

  </S.Container>

);
}


