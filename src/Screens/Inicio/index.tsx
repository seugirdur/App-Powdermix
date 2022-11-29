import { v4 } from "uuid";
import * as S from "./style";
import * as React from "react";
import "react-native-get-random-values";
import { api } from "../../../services/api";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { FlatList, Modal, ScrollView, Dimensions, View, Image, StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalCart } from "../../components/ModalCart";
import { StatusBar } from "../../components/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { CardVertical } from "../../components/CardVertical";
import { IProductObject } from "../../business/models/interfaces/IProduct";
import { LoadingPage } from "../../components/LoadingPage";
import { Slider } from "../../components/Slider";

const { width } = Dimensions.get("window");
const height = (width * 100) / 160;

export type Sheets = {
  [0]: number;
  [1]: string;
  [2]: string;
  [3]: number;
  [4]: string;
  [5]: string;
};

export function Inicio() {
  
      const [active, setActive] = useState(0);
  
      const change = ({nativeEvent}: any) => {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
          if(slide !== active) {
            setActive(slide);
          }
        }

  const [title, setTitle] = useState<Sheets[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [imgArr, setImgArr] = useState([]);
  useEffect(() => {
    async function getStoreData() {
      setShowLoading(true);
      await api.get("/getProdutos").then(function (response) {
        setTitle(response.data);
        // console.log(response.data[0][4]);



       
        setShowLoading(false);
      });

      await api.get("/getSlider").then( (response) => {
        console.log(response.data[0][0]);
        let imagestogether = response.data[0][0];
        let imagesArr = imagestogether.split(',');
        console.log(imagesArr);
        setImgArr(imagesArr);
      })
        // console.log(response.data[0][4]);


    }



    getStoreData();
  }, []);

  

  const images = [
    "https://powdermix.com.br/wp-content/uploads/2022/05/misturador-m4-1.jpg",
    "https://powdermix.com.br/wp-content/uploads/2022/05/misturador-triturador-y-powdermix.png",
    "https://powdermix.com.br/wp-content/uploads/2022/05/misturador-triturador-m2-vertical.jpg",
  ];

  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.navigate("Produto", { item });
  }

  return (
    <>
      <S.Container>
        <StatusBar />

        {/* <Slider images={imgArr}/> */}

        <S.Carrosel>
          <View style={{width, height}}>
          <ScrollView 
          pagingEnabled 
          horizontal 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScroll={change}
          style={{width, height}}
          >
            {imgArr.map((image, index) => (
              <Image
                key={index}
                source={{
                  uri: image
                }}
                style={{width, height, resizeMode:"contain"}}
              />
            ))}
          </ScrollView>
          </View>
        
        </S.Carrosel>

        <S.ThreeDots>
          {imgArr.map((i, k) => (
            
          <Entypo key={k} style={k==active ? style.pagginActiveIcon : style.pagginIcon} name="dot-single" size={24} color="white" />
          ))}
        </S.ThreeDots>

        {/* <SearchBar></SearchBar> */}

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
              <CardVertical data={item} onPress={() => openScreen(item)} />
            )}
          />
        </S.CardContainer>
      </S.Container>
      {showLoading ? <LoadingPage /> : null}
    </>
  );
}

const style = StyleSheet.create({
  pagginIcon:  {color: 'white'},
  pagginActiveIcon:  {color: 'red'},

})
