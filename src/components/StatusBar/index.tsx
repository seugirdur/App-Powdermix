import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as S from "./style";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { CardVertical, CartProps } from "../CardVertical";
import { Feather } from "@expo/vector-icons";
import logo from "../../assets/onlyname.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { CardCart } from "../CardCart";

export function StatusBar() {
  const [cart, setCart] = useState<CartProps[]>([]);

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("Produto");
  }

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  async function handleSeeCart() {
    const response = await AsyncStorage.getItem("@saveproducts:cart");
    const data = response ? JSON.parse(response) : [];
    setCart(data);
    console.log(cart);
    setModalVisible(true);
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
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCart product={item}/>
          )}
        />
              </S.CartContainer>
          </S.TouchableSemCapa>
        </S.OffClick>
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
