import { v4 } from "uuid";
import { MaterialIcons, Entypo, Feather } from "@expo/vector-icons";
import * as S from "./style";
import { Sheets } from "../Inicio";
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
import { api } from "../../../services/api";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Toast from "react-native-toast-message";
import { StatusBar } from "../../components/StatusBar";
import YoutubePlayer from "react-native-youtube-iframe";
import { CardHorizontal } from "../../components/CardHorizontal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Slider } from "../../components/Slider";
import { Linking } from "react-native";

type RouteParams = {
  item: Sheets;
};

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

export function Produto() {
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  const { getItem, setItem } = useAsyncStorage("@saveproducts:cart");
  const [counter, setCounter] = useState<number>(1);

  const route = useRoute();
  const { item } = route.params as RouteParams;
  const productInfo = item;

  const [title, setTitle] = useState<Sheets[]>([]);
  useEffect(() => {
    async function getStoreData() {
      await api.get("/getProdutos").then(function (response) {
        setTitle(response.data);
      });
    }
    getStoreData();
  }, []);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.goBack();
    navigation.navigate("Produto", { item });
  }

  const produtoNome = productInfo[1];
  const produtoDesc = productInfo[2];
  const produtoPrecoOriginal = productInfo[3];
  const produtoPreco = productInfo[4];
  const imagesArr = productInfo[5].split(",");
  const imagemsolo = imagesArr[0];
  const linkManual = productInfo[7];

  const produtoImg1 = imagemsolo;
  const produtoVideo = productInfo[6];

  async function handleStore() {
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

  const formatNumber = (price: number) => {
    let priceWithDot = price.toFixed(2);

    let str = priceWithDot.toString();
    const replaced1 = str.replace(".", ",");

    return "R$ " + replaced1;
  };

  function plusQuantity(counting: number) {
    counting++;
    setCounter(counting);
  }

  function minusQuantity(counting: number) {
    if (counting > 1) {
      counting--;
      setCounter(counting);
    } else {
      setCounter(1);
    }
  }

  const semManual = () => {
    Alert.alert(
      "Manual indisponível",
      "Não possuímos material desse item ainda.\nPara saber mais entre em contato pelo nosso WhatsApp."
    );
  };

  return (
    <S.Container>
      <StatusBar />

      <S.ScrollContainer>
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
              {imagesArr.map((image, index) => (
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
          {imagesArr.map((i, k) => (
            <Entypo
              key={k}
              style={k == active ? style.pagginActiveIcon : style.pagginIcon}
              name="dot-single"
              size={24}
              color="white"
            />
          ))}
        </S.ThreeDots>

        <S.Prices>
          <S.OriginalPrice>
            {formatNumber(produtoPrecoOriginal)}
          </S.OriginalPrice>
          <S.PromocionalPrice>{formatNumber(produtoPreco)}</S.PromocionalPrice>
        </S.Prices>

        <S.Name>
          <S.Title>Nome:</S.Title>
          <S.BigName>{produtoNome}</S.BigName>
        </S.Name>

        <S.ContainerButton>
          <S.QuantityBox>
            <S.QuantityRedBox>
              <S.TitleQuantity>Qtd.</S.TitleQuantity>
            </S.QuantityRedBox>
            <S.QuantityWhiteBox>
              <S.MinusQuantity onPress={() => minusQuantity(counter)}>
                <Feather name="minus" size={25} color="black" />
              </S.MinusQuantity>
              <S.QuantityNumber>{counter}</S.QuantityNumber>
              <S.PlusQuantity onPress={() => plusQuantity(counter)}>
                <Feather name="plus" size={25} color="black" />
              </S.PlusQuantity>
            </S.QuantityWhiteBox>
          </S.QuantityBox>

          <S.ButtonBuy onPress={handleStore}>
            <S.TextButton>Adicionar ao carrinho</S.TextButton>
            <Feather
              name="plus"
              size={25}
              style={{ right: 32 }}
              color="white"
            />
            <Feather
              name="shopping-cart"
              size={30}
              style={{ right: 28 }}
              color="white"
            />
          </S.ButtonBuy>
        </S.ContainerButton>
        <S.Description>
          <S.TitleDesc>DESCRIÇÃO:</S.TitleDesc>
          <S.TextDesc>{produtoDesc}</S.TextDesc>
        </S.Description>

        <S.Video>
          <YoutubePlayer
            height={300}
            videoId={produtoVideo}
            webViewStyle={{ opacity: 0.99 }}
          />
        </S.Video>
        <S.Hyperlink
          onPress={
            productInfo[6]
              ? () => Linking.openURL(`${productInfo[6]}`)
              : () => semManual()
          }
        >
          Confira o manual desse item clicando aqui! ↗
        </S.Hyperlink>

        <S.CardContainer>
          <S.ScrollHorizontal
            horizontal={true}
            data={title}
            keyExtractor={(item: Sheets) => item[0].toString()}
            renderItem={({ item }: { item: Sheets }) => (
              <CardHorizontal data={item} onPress={() => openScreen(item)} />
            )}
          ></S.ScrollHorizontal>
        </S.CardContainer>
      </S.ScrollContainer>
    </S.Container>
  );
}

const style = StyleSheet.create({
  pagginIcon: { color: "white" },
  pagginActiveIcon: { color: "red" },
});
