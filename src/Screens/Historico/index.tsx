import React from 'react';
import { Button, Text, View } from 'react-native';
import { useRoute, DrawerActions, useNavigation } from '@react-navigation/native'
import { StatusBar } from '../../components/StatusBar';
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



export function Historico() {
const navigation = useNavigation();
const route = useRoute();
  
  return (
    <S.Container>
     <StatusBar/>

    </S.Container>
  );
}