import * as S from "./style";
import { FlatList } from "react-native";
import React, { useState } from "react";
import { CartProps } from "../CardVertical";
import { QuantityBox } from "../QuantityBox";
import logo from "../../assets/onlyname.png";
import theme from "../../global/styles/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


export const formatNumber = (price: number, qtd?: number) => {

  let fullPrice;

  qtd ? fullPrice = price * qtd : fullPrice = price
  
  let priceWithDot = fullPrice.toFixed(2)

let str = priceWithDot.toString()
const replaced1 = str.replace('.', ',');

return "R$ " + replaced1
}




export function StatusBar() {
  const navigation = useNavigation();
  const [cart, setCart] = useState<CartProps[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");



  const [fullPrice, setFullPrice] = useState<number>();
  const [fullPriceShow, setFullPriceShow] = useState<string>();

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  


  async function handleSeeCart() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setCart([...data]);
    sumThePrice();
    // console.log(cart);
    if (!isModalVisible) {
      setModalVisible(true);
    }
  }

  const [counter, setCounter] = useState<number>();

  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: CartProps) => item.id !== id);
    const completeData = JSON.stringify(data);
    setItem(completeData);
    handleSeeCart();
  }

  async function sumThePrice() {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    // const price = previousData.filter((item: CartProps) => )

    let ans= 0;

    // const lmao = previousData.map((item: CartProps) => item.produtoPreco > 1);
    var sum = previousData.map((item: CartProps) => {
      ans+= item.produtoPreco * item.counter
      // console.log(ans)
    });

    let formatedAnswer = formatNumber(ans)

    setFullPriceShow(formatedAnswer);
    setFullPrice(ans);


  }


  
  
//   async function plusQuantity(counting: number, id: string){
//     counting++
//       // setCounter(counting);


//       const response = await getItem();
//       const previousData = response ? JSON.parse(response) : [];
//       const data = previousData.filter((item: CartProps) => item.id == id);
//       const completeData = JSON.stringify(data);
      
//       const lmao = previousData.map((item: CartProps) => item.produtoPreco )
      
//       setItem(completeData);
//       handleSeeCart();

//       // const array1 = [1, 4, 9, 16];

//       // // pass a function to map
//       // const map1 = array1.map(x => x * 2);
      
//       // expected output: Array [2, 8, 18, 32]


//  }
 
//  function minusQuantity(counting: number){
//    if(counting > 1) {
//     counting--
//      setCounter(counting)
//    } else {
//      setCounter(1)
//    }
//  }

  return (
    <S.StatusBar>
      <S.ModalContainer
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
      >
        <S.OffClick
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <S.TouchableSemCapa>
            <S.CartContainer>
              <FlatList
                ListHeaderComponent={
                  <>
                    <S.TitleCart> Carrinho de Compras </S.TitleCart>
                  </>
                }
                extraData={cart}
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <S.CardCartBorder>
                      <S.CardCart type={cart}>
                        <S.ContainerImage>
                          <S.ProdutoImage source={{ uri: item.produtoImg1 }} />
                        </S.ContainerImage>

                        <S.ContainerText>
                          <S.Qtd>{item.counter}x { item.counter > 1 ? "unidades": "unidade" }</S.Qtd>
                          <S.Titulo> {item.produtoNome} </S.Titulo>
                        </S.ContainerText>



                       


                        <S.ContainerTextPrice>
                          <S.Price>
                            
                            {formatNumber(item.produtoPreco, item.counter )}
                            
                            
                 
                             
                             
                             
                             
                             </S.Price>
                        </S.ContainerTextPrice>

                        <S.CircleClose onPress={() => handleRemove(item.id)}>
                          <EvilIcons
                            name="close"
                            size={24}
                            color={theme.colors.gray700}
                          />
                        </S.CircleClose>
                      </S.CardCart>
                    </S.CardCartBorder>
                  );
                }}
              />
            </S.CartContainer>
          </S.TouchableSemCapa>
        </S.OffClick>
        <S.TouchablePost>
          <S.PostContainer>
            <S.LogoContainer>
              <S.LogoImage source={logo}></S.LogoImage>
            </S.LogoContainer>

            <S.ValueContainer>
              <S.TextValue>VALOR TOTAL:</S.TextValue>
                <S.ValueCalc>

                  {fullPriceShow}
                  
                  
                  </S.ValueCalc>
            </S.ValueContainer>

            <S.Row>
              <S.RowInternal />
            </S.Row>
            <S.ButtonPostContainer>
              <S.SendPost>
                <S.PostText> Pedir Orçamento </S.PostText>
              </S.SendPost>
            </S.ButtonPostContainer>
          </S.PostContainer>
        </S.TouchablePost>
      </S.ModalContainer>

      <S.Hamburguer onPress={openDrawer}>
        <FontAwesome5 name="bars" size={24} color="#000" />
      </S.Hamburguer>
      <S.Logo source={logo}></S.Logo>
      <S.SquareRound onPress={handleSeeCart}>
        <Feather name="shopping-cart" size={40} color="white" />
      </S.SquareRound>
    </S.StatusBar>
  );
}
