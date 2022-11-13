// import { v4 } from "uuid";
// import React, { useCallback, useEffect, useState } from "react";
// import * as S from './style';
// import { Feather, FontAwesome, EvilIcons } from '@expo/vector-icons';
// import { Sheets } from "../../Screens/Inicio";
// import Toast from 'react-native-toast-message';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';
// import { Alert, TouchableOpacityProps } from 'react-native'
// import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
// import { QuantityBox } from "../QuantityBox";
// import theme from "../../global/styles/theme";

// // import { Toast } from "react-native-toast-message/lib/src/Toast";

// const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");


// type Props = {
//   product: CartProps
// } & TouchableOpacityProps


// export type CartProps = {
//   id: string;
//   produtoNome: string;
//   produtoDesc: string;
//   produtoPreco: number;
//   produtoImg1: string;
// }


// let counter = 1
// function lmaoCount(counter: number) {
//   counter++
//   Alert.alert(counter.toString())
//   console.log(counter)
// }


// export function CardCart({ product, ...rest }: Props) {

//   function lmaoALert(name: string) {
//     Alert.alert(name)
//   }

  
// const navigation = useNavigation();

// function openScreen() {
//   navigation.navigate("Inicio");
// }

// const [cart, setCart] = useState<CartProps[]>([]);


// async function handleRemove(id: string) {
//   const response = await getItem();
//   const previousData = response ? JSON.parse(response) : [];

//   const data = previousData.filter((item: CartProps) => item.id !== id);
//   const lmao = JSON.stringify(data);
//   setItem(lmao);
//   handleFetchData();
// }

// useEffect(() => {
//   setCart(cart)
//   console.log("vou atualizar amigo")
// }, [cart]);



// async function handleFetchData() {
//   const response = await getItem();
//   const data = response ? JSON.parse(response) : [];
//   setCart(data);
// }

// useFocusEffect(useCallback(() => {
//   handleFetchData();
// }, []));

//   return (

//     <S.CardCartBorder>

//     <S.CardCart
//       type={cart} {...rest}

//     >

//       <S.ContainerImage>
//         <S.ProdutoImage
//           source={{ uri: product.produtoImg1 }}

//         />
//       </S.ContainerImage>

//       <S.ContainerText>
//         <S.Qtd>1x unidade</S.Qtd>
//         <S.Titulo> {product.produtoNome} </S.Titulo>
//       </S.ContainerText>

//         <QuantityBox/>
//       <S.ContainerTextPrice>
//       <S.Price> R$ {product.produtoPreco} </S.Price>
//       </S.ContainerTextPrice>

//       <S.CircleClose 
//       onPress={() => handleRemove(product.id)}
//       >
//       <EvilIcons name="close" size={24} color={theme.colors.gray700} />
//       </S.CircleClose>



//     </S.CardCart>
//     </S.CardCartBorder>
//   )
// };