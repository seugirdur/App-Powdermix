import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './style'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { FontAwesome5 } 
from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Feather } from '@expo/vector-icons'; 
import logo from '../../assets/onlyname.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartProps } from '../CardVertical';




export function StatusBar(){
  const [cart, setCart] = useState<CartProps[]>([]);

  const navigation = useNavigation();


  function openScreen() {
    navigation.navigate('Produto')
  
  }
  
  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  async function handleSeeCart() {
    const response = await AsyncStorage.getItem("@saveproducts:cart");
    const data = response ? JSON.parse(response) : [];
    console.log(data);
    setCart(data);
  }


  
  return (


<S.StatusBar>

<S.Hamburguer
onPress={openDrawer}
>
  <FontAwesome5 name="bars" size={24} color="#000"/>

</S.Hamburguer>
<S.Logo
source={logo}
></S.Logo>
<S.SquareRound
onPress={handleSeeCart}
>

<Feather name="shopping-cart" size={40} color="white" />
</S.SquareRound>

</S.StatusBar>
);
}