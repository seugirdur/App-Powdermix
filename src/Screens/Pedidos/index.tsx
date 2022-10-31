import React from 'react';
import { Button, Text, View } from 'react-native';
import { useRoute, DrawerActions, useNavigation } from '@react-navigation/native'
import { StatusBar } from '../../components/StatusBar';
import { FontAwesome5 } 
from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
//yarn add @types/react -D
// import { styles } from './styles';
import * as S from './style'
import logo from '../../assets/onlyname.png'
import { Feather } from '@expo/vector-icons'; 



type ParamsProps = {
  name: string;
}

function openDrawer() {
  const navigation = useNavigation();
  navigation.dispatch(DrawerActions.openDrawer());
}

export function Pedidos() {
const navigation = useNavigation();
const route = useRoute();
  
  return (
   



    <S.Container>
     <StatusBar/>

    </S.Container>
  );
}