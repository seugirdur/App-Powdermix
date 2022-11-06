import React from "react";
import * as S from './style';
import { Sheets } from "../../Screens/Inicio";
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableOpacityProps } from 'react-native'
import { IProductObject } from "../../business/models/interfaces/IProduct";
import { v4 } from "uuid";
import getRealm from "../../infrastructure/realm";


type Props = {
  data: Sheets
} & TouchableOpacityProps

let counter = 1
function lmaoCount(counter: number) {
  counter++
  Alert.alert(counter.toString())
  console.log(counter)
}

export function CardVertical({ data, ...rest }: Props) {



  // let firstProduct: IProductObject;

  // const writeTasks = async () => {
  //   const realm = await getRealm();

  //   try {
  //     realm.write(() => {
  //       firstProduct = realm.create("Product",
  //         {
  //           _id: v4(),
  //           productName: 'lmao',
  //           description: 'lmao',
  //           price: 3,
  //           imgUrl: 'lmao'

  //         });
  //     });

  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     realm.close();
  //   }
  // }


  function lmaoALert(name: string) {
    Alert.alert(name)
  }





  return (

    <S.CardVertical
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
      </S.ContainerText>

      <S.ContainerVideo>

        <S.Video
          source={{ uri: data[4] }}
        />
        <S.OverFlowVideo />

        <S.VideoIcon>
          <Feather name="play" size={24} color="white" />
        </S.VideoIcon>

      </S.ContainerVideo>

      <S.ContainerButton>
        <S.BuyButton
          onPress={() => writeTasks}
        >
          <Feather name="plus" size={25} style={{ left: -4 }} color="white" />
          <Feather name="shopping-cart" size={30} style={{ left: -4 }} color="white" />

        </S.BuyButton>

      </S.ContainerButton>



    </S.CardVertical>
  )
};