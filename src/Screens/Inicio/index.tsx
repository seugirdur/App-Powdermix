import { v4 } from "uuid";
import * as S from "./style";
import * as React from "react";
import "react-native-get-random-values";
import { api, api2 } from "../../../services/api";
import { Entypo, Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from 'axios';

import { FlatList,
  Modal,
    ScrollView,
     Dimensions,
      View,
       Image,
         StyleSheet,
           Alert 
        } from "react-native";
import { SearchBar } from "react-native-screens";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalCart } from "../../components/ModalCart";
import { StatusBar } from "../../components/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { CardVertical } from "../../components/CardVertical";
import { IProductObject } from "../../business/models/interfaces/IProduct";
import { LoadingPage } from "../../components/LoadingPage";
import { Slider } from "../../components/Slider";
import * as Network from 'expo-network';

const { width } = Dimensions.get("window");
const height = (width * 100) / 160;

export type Sheets = {
  [0]: number;
  [1]: string;
  [2]: string;
  [3]: number;
  [4]: string;
  [5]: string;
  [6]: string;
};




export function Inicio() {

  console.log("im dad rerender")
  
      const [active, setActive] = useState(0);
  
      const change = ({nativeEvent}: any) => {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
          if(slide !== active) {
            setActive(slide);
          }
        }

  const [title, setTitle] = useState<Sheets[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [haveInternet, setHaveInternet] = useState(true);
  const [imgArr, setImgArr] = useState([]);




  // useEffect(() => {
    async function getStoreData() {
      console.log("lmao")
      // const onAcre = await (await Network.getNetworkStateAsync()).isConnected
      // console.log(onAcre)

      // setShowLoading(true);




      if (title.length!=0) {
        setShowLoading(false);
      }

      // let res = await api.get('/getLmao');
      // let data = res.data;
      // console.log(data);


        // try {
        //   let response = await fetch(
        //     'https://powdermixserver.fly.dev/getProdutos',
        //   );
        //   let responseJson = await response.json();
        //   // let parseText = parsej responseJson
        //   console.log(responseJson);
        // } catch (error) {
        //   console.error(error);
        // }
      

      //   const config = {
      //     method: 'get',
      //     url: 'https://powdermixfly.fly.dev/getProdutos',
      //     headers: { 'User-Agent': 'Fly-Client-IP' }  
      // }
  
      // let res = await axios(config)
  
      // console.log(res.data);
  
    
      // await api.get("/").then(function (response) {
      //   console.log("dont save her")
      //   console.log(response.status);
      // })

      // await api.get("/getLmao").then(function (response) {
      //   console.log("she dont wanna be saved")
      //   console.log(response.data);
      // })



      // // await api.get("/getProdutos", {timeout: 10}).then(function (response) {
      await api.get("/getProdutos").then(function (response) {
        setTitle(response.data);
    

        setShowLoading(false);
      }).catch(function (error) {
        if (error.response) {
          Alert.alert(
            "Problema de conexão",
            "Lamentamos o incidente, tente novamente mais tarde",
     
          )
          console.log("lmaooooo1")

          // A requisição foi feita e o servidor respondeu com um código de status
          // que sai do alcance de 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.log("lmaooooo2")
          Alert.alert(
            "lmaooooo2",
            "Para continuar, adicione primeiro algum dos nossos itens!",
     
          )
          // A requisição foi feita mas nenhuma resposta foi recebida
          // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
          // http.ClientRequest no node.js
          console.error(error.request);
        } else {
          console.log("lmaooooo3")
          Alert.alert(
            "lmaooooo3",
            "Para continuar, adicione primeiro algum dos nossos itens!",
     
          )
          // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
          console.error('Error', error.message);
        }
        console.log("lmaooooo4")
        Alert.alert(
          "lmaooooo4",
          "Para continuar, adicione primeiro algum dos nossos itens!",
   
        )
        console.error(error.config);
      });






      await api.get("/getSlider").then( (response) => {
        // console.log(response.data[0][0]);
        let imagestogether = response.data[0][0];
        let imagesArr = imagestogether.split(',');
        // console.log(imagesArr);
        setImgArr(imagesArr);
      })
        // console.log(response.data[0][4]);


    }



    // getStoreData();
  // }, [showLoading]);

  

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

  
  // console.log((title[0][4].split(',')).shift());

  

  return (
    <>
      <S.Container>
        <StatusBar />

        {/* <Slider images={imgArr}/> */}

        <S.Carrosel
        // onPress={() => getStoreData}
        >
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
                <S.TitleHistoric
                onPress={getStoreData}
                >Produtos</S.TitleHistoric>
              </>
              }

            keyExtractor={(item) => item[0].toString()}
            renderItem={({ item }) => (
              // <CardVertical data={item} onPress={() => openScreen(item)} />

              <S.CardVertical type={item}>
      <S.ContainerImage>
        <S.ProdutoImage source={{ 
          // uri: item[4].split(',').shift()
          uri: "https://escolaeducacao.com.br/wp-content/uploads/2019/01/o-que-significa-lmao.jpg"
          
          }} />
      </S.ContainerImage>

      <S.ContainerText>
        <S.Titulo>{item[1]}</S.Titulo>
        <S.Desc>{item[2]}</S.Desc>
      </S.ContainerText>

      {/* <S.ContainerVideo>
        <S.Video source={{ uri: produtoImg1 }} />
        <S.OverFlowVideo />

        <S.VideoIcon>
          <Feather name="play" size={24} color="white" />
        </S.VideoIcon>
      </S.ContainerVideo> */}

      <S.ContainerButton>
        <S.BuyButton
        //  onPress={handleStore}
         >
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
