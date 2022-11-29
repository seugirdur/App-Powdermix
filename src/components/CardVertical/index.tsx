import { v4 } from "uuid";
import React from "react";
import * as S from "./style";
import { Feather } from "@expo/vector-icons";
import { Sheets } from "../../Screens/Inicio";
import Toast from 'react-native-toast-message';
import { TouchableOpacityProps } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export type Props = {
  data: Sheets;
} & TouchableOpacityProps;

const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");

export type CartProps = {
  id: string;
  produtoNome: string;
  produtoDesc: string;
  produtoPreco: number;
  produtoImg1: string;
  counter: number;
};

let counter = 1;



export function CardVertical({ data, ...rest }: Props) {

  let imagesArr = data[4].split(',');

  const id = v4();
  const produtoNome = data[1];
  const produtoDesc = data[2];
  const produtoPreco = data[3];
  const produtoImg1 = imagesArr[0];



  async function handleStore() {
    try {
      const theProduct = {
        id,
        produtoNome,
        produtoDesc,
        produtoPreco,
        produtoImg1,
        counter,
      };

      const oldProducts = await getItem();
      const previousData = oldProducts ? JSON.parse(oldProducts) : [];
      const allProducts = [...previousData, theProduct];
      await setItem(JSON.stringify(allProducts));
      
      Toast.show({
        type: 'success',
        text1: 'Item adicionado!',
        text2: 'Cheque o seu carrinho ou adicione mais produtos!'
      });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.CardVertical type={data} {...rest}>
      <S.ContainerImage>
        <S.ProdutoImage source={{ 
          uri: produtoImg1
          
          }} />
      </S.ContainerImage>

      <S.ContainerText>
        <S.Titulo>{produtoNome}</S.Titulo>
        <S.Desc>{produtoDesc}</S.Desc>
      </S.ContainerText>

      {/* <S.ContainerVideo>
        <S.Video source={{ uri: produtoImg1 }} />
        <S.OverFlowVideo />

        <S.VideoIcon>
          <Feather name="play" size={24} color="white" />
        </S.VideoIcon>
      </S.ContainerVideo> */}

      <S.ContainerButton>
        <S.BuyButton onPress={handleStore}>
          <Feather name="plus" size={25} style={{ left: -4 }} color="white" />
          <Feather
            name="shopping-cart"
            size={30}
            style={{ left: -4 }}
            color="white"
          />
        </S.BuyButton>
      </S.ContainerButton>
    </S.CardVertical>
  );
}
