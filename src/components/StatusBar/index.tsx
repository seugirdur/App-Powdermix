import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './style'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { FontAwesome5 } 
from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { Feather } from '@expo/vector-icons'; 
import logo from '../../assets/onlyname.png';

function openDrawer() {
    const navigation = useNavigation();
    navigation.dispatch(DrawerActions.openDrawer());
  }

  
type Props = {
    title: string;
} & TouchableOpacityProps

export function StatusBar({title}: Props ){


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
}