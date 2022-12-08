import { v4 } from "uuid";
import * as S from "./style";
import * as React from "react";
import "react-native-get-random-values";
import { api, api2 } from "../../../services/api";
import { Entypo, Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  FlatList,
  Modal,
  ScrollView,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as Network from "expo-network";
import Toast from "react-native-toast-message";
import { SearchBar } from "react-native-screens";
import { Slider } from "../../components/Slider";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "../../components/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { CardVertical } from "../../components/CardVertical";
import { LoadingPage } from "../../components/LoadingPage";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { FadeAnimation } from "../../components/FadeAnimation";

const { width } = Dimensions.get("window");
const height = (width * 100) / 160;

export type Sheets = {
  [0]: number;
  [1]: string;
  [2]: string;
  [3]: number;
  [4]: number;
  [5]: string;
  [6]: string;
  [7]: string;
};

const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");

//tela de inicio
export function Inicio() {
  async function handleStore(
    produtoNome: string,
    produtoDesc: string,
    produtoPreco: number,
    produtoImg1: string | undefined,
    counter: number
  ) {
    try {
      const id = v4();

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
        type: "success",
        text1: "Item adicionado!",
        text2: "Cheque o seu carrinho ou adicione mais produtos!",
      });
    } catch (error) {
      console.log(error);
    }
  }

  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  const [title, setTitle] = useState<Sheets[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [haveInternet, setHaveInternet] = useState(true);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      setShowLoading(true);

      if (title.length != 0) {
        setShowLoading(false);
      }

      await api
        .get("/getProdutos")
        .then(function (response) {
          setTitle(response.data);

          setShowLoading(false);
        })
        .catch(function (error) {
          if (error.response) {
            Alert.alert(
              "Problema de conexão",
              "Lamentamos o incidente, tente novamente mais tarde"
            );
          }
        });

      await api.get("/getSlider").then((response) => {
        let imagestogether = response.data[0][0];
        let imagesArr = imagestogether.split(",");
        setImgArr(imagesArr);
      });
    }

    getStoreData();
  }, [showLoading]);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.navigate("Produto", { item });
  }

  return (
    <>
      <S.Container>
        <StatusBar />

        <S.Carrosel>
          <View style={{ width, height }}>
            <ScrollView
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              onScroll={change}
              style={{ width, height }}
            >
              {imgArr.map((image, index) => (
                <Image
                  key={index}
                  source={{
                    uri: image,
                  }}
                  style={{ width, height, resizeMode: "contain" }}
                />
              ))}
            </ScrollView>
          </View>
        </S.Carrosel>

        <S.ThreeDots>
          {imgArr.map((i, k) => (
            <Entypo
              key={k}
              style={k == active ? style.pagginActiveIcon : style.pagginIcon}
              name="dot-single"
              size={24}
              color="white"
            />
          ))}
        </S.ThreeDots>

        <S.CardContainer>
          <FlatList
            data={title}
            ListHeaderComponent={
              <>
                <S.TitleHistoric>Produtos</S.TitleHistoric>
              </>
            }
            keyExtractor={(item) => item[0].toString()}
            renderItem={({ item }) => (
              <FadeAnimation>
              <CardVertical data={item} onPress={() => openScreen(item)} />
              </FadeAnimation>
            )}
          />
        </S.CardContainer>
      </S.Container>
      {showLoading ? <LoadingPage /> : null}
    </>
  );
}

const style = StyleSheet.create({
  pagginIcon: { color: "white" },
  pagginActiveIcon: { color: "red" },
});
