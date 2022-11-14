import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as S from "./style";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { CardVertical, CartProps } from "../CardVertical";
import { Feather, EvilIcons } from "@expo/vector-icons";
import logo from "../../assets/onlyname.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import { useNavigation, DrawerActions } from "@react-navigation/native";
// import { CardCart } from "../CardCart";
import theme from "../../global/styles/theme";
import { QuantityBox } from "../QuantityBox";


const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");

export function StatusBar() {
  const [cart, setCart] = useState<CartProps[]>([]);

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("Produto");
  }

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  let isLoading = true;



  async function handleSeeCart() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setCart([...data]);
    console.log(cart);
    if (!isModalVisible) {
      setModalVisible(true);
    }
  }

  
async function handleRemove(id: string) {
  const response = await getItem();
  const previousData = response ? JSON.parse(response) : [];

  const data = previousData.filter((item: CartProps) => item.id !== id);
  const lmao = JSON.stringify(data);
  setItem(lmao);
  handleSeeCart()
}


  const [isModalVisible, setModalVisible] = useState(false);

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
                refreshing={isLoading}
                extraData={cart}
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {

                  return (
                    <S.CardCartBorder>

                      <S.CardCart
                        type={cart}

                      >

                        <S.ContainerImage>
                          <S.ProdutoImage
                            source={{ uri: item.produtoImg1 }}

                          />
                        </S.ContainerImage>

                        <S.ContainerText>
                          <S.Qtd>1x unidade</S.Qtd>
                          <S.Titulo> {item.produtoNome} </S.Titulo>
                        </S.ContainerText>

                        <QuantityBox

                        quantity={item.counter}
                         />
                        <S.ContainerTextPrice>
                          <S.Price> R$ {item.produtoPreco} </S.Price>
                        </S.ContainerTextPrice>

                        <S.CircleClose
                          onPress={() => handleRemove(item.id)}
                        >
                          <EvilIcons name="close" size={24} color={theme.colors.gray700} />
                        </S.CircleClose>



                      </S.CardCart>
                    </S.CardCartBorder>
                  )

                }
              }
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
              <S.TextValue>
                VALOR TOTAL:
              </S.TextValue>
              <S.ValueCalc>
                R$ XXXX,XX
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
