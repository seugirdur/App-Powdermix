import React from "react";
import * as S from './style';
import AppLoading from 'expo-app-loading';
import { Sheets } from "../../Screens/Inicio";
import { Alert, TouchableOpacityProps } from 'react-native'
import { Feather  } from '@expo/vector-icons';
import theme from "../../global/styles/theme";
import Toast from 'react-native-toast-message';
import { useNavigation, DrawerActions } from '@react-navigation/native';


type Props = {
    data: Sheets
} & TouchableOpacityProps

let counter = 1
function lmaoCount(counter: number){
  counter++
  Alert.alert(counter.toString())
  console.log(counter)
}

export function CardHorizontal({data,...rest} : any) {

    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Produto')
    
      }

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
      }

      async function lmaoALert(name: string){
        await Alert.alert(name)
      }
    return (
        
        <S.CardHorizontal 
        type={data} {...rest}
        
        >

            <S.ContainerImage>
        <S.ProdutoImage
        source={{ uri: data[4] }}

        />
        </S.ContainerImage>

        <S.ContainerText>
        <S.Titulo> {data[1]} </S.Titulo>
        <S.Desc> {data[2]} </S.Desc>
        <S.Price>R${data[3]}</S.Price>
        </S.ContainerText>
        <S.ContainerButton>
            <S.BuyButton
            onPress={() => lmaoCount(counter++)}
            >
            <Feather name="plus" size={25} style={{left:-4}} color="white" />
            <Feather name="shopping-cart" size={30} style={{left:-4}} color="white" />
            </S.BuyButton>
        </S.ContainerButton>
        </S.CardHorizontal>
    )
};