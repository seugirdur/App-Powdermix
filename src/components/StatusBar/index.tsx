import * as S from "./style";
import { CartProps } from "../CardVertical";
import { QuantityBox } from "../QuantityBox";
import theme from "../../global/styles/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather, EvilIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Alert, FlatList, TouchableOpacityProps } from "react-native";
import logo from "../../assets/Logo_PowderMix_Colorido_no_symbol.png";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

type Props = {
  qtdCart: number;
} & TouchableOpacityProps;

export const formatNumber = (price: number, qtd?: number) => {
  let fullPrice;

  qtd ? (fullPrice = price * qtd) : (fullPrice = price);

  let priceWithDot = fullPrice.toFixed(2);

  let str = priceWithDot.toString();
  const replaced1 = str.replace(".", ",");

  return "R$ " + replaced1;
};
//status bar
export function StatusBar() {
  const navigation = useNavigation();
  const [cart, setCart] = useState<CartProps[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");
  const [qtdCartStatus, setQtdCartStatus] = useState<number>(0);

  const [fullPrice, setFullPrice] = useState<number>();
  const [fullPriceShow, setFullPriceShow] = useState<string>();

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  //funcao de abrir a tela de envio ou a de formulario
  async function openScreen() {
    const getCart = await getItem();
    const data = getCart ? JSON.parse(getCart) : [];

    if (fullPriceShow != "R$ 0,00") {
      const getInfo = await AsyncStorage.getItem("@saveinfo:personalinfo");
      getInfo
        ? navigation.navigate("Enviar")
        : navigation.navigate("Formulario");
      setModalVisible(false);
    } else {
      Alert.alert(
        "Preencha o carrinho",
        "Para continuar, adicione primeiro algum dos nossos itens!"
      );
    }
  }
  //função de ver o carrinho
  const handleSeeCart = async () => {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setCart([...data]);
    sumThePrice();
    if (!isModalVisible) {
      setModalVisible(true);
    }
  };

  const [counter, setCounter] = useState<number>();
  //função de retirar item do carrinho
  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: CartProps) => item.id !== id);
    const completeData = JSON.stringify(data);
    setItem(completeData);
    handleSeeCart();
  }
  //função para somar o total gasto
  async function sumThePrice() {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    let ans = 0;

    var sum = previousData.map((item: CartProps) => {
      ans += item.produtoPreco * item.counter;
    });

    let formatedAnswer = formatNumber(ans);

    setFullPriceShow(formatedAnswer);
    setFullPrice(ans);
  }

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
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <S.CardCartBorder>
                      <S.CardCart type={cart}>
                        <S.ContainerImage>
                          <S.ProdutoImage source={{ uri: item.produtoImg1 }} />
                        </S.ContainerImage>

                        <S.ContainerText>
                          <S.Titulo adjustsFontSizeToFit>
                            {item.produtoNome}
                          </S.Titulo>
                          <S.Qtd>
                            {item.counter}x{" "}
                            {item.counter > 1 ? "unidades" : "unidade"}
                          </S.Qtd>
                        </S.ContainerText>

                        <S.ContainerTextPrice>
                          <S.Price adjustsFontSizeToFit>
                            {formatNumber(item.produtoPreco, item.counter)}
                          </S.Price>
                        </S.ContainerTextPrice>

                        <S.CircleClose onPress={() => handleRemove(item.id)}>
                          <EvilIcons
                            name="close"
                            size={20}
                            color={theme.colors.white}
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
              <S.TextValue adjustsFontSizeToFit>VALOR TOTAL:</S.TextValue>
              <S.ValueCalc adjustsFontSizeToFit>{fullPriceShow}</S.ValueCalc>
            </S.ValueContainer>

            <S.Row>
              <S.RowInternal />
            </S.Row>
            <S.ButtonPostContainer>
              <S.SendPost onPress={openScreen}>
                <S.PostText>Pedir Orçamento</S.PostText>
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
