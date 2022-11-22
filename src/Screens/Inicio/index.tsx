import { v4 } from "uuid";
import * as S from "./style";
import * as React from "react";
import "react-native-get-random-values";
import {api} from "../../../services/api";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { FlatList, Modal } from "react-native";
import { SearchBar } from "react-native-screens";
import { MaterialIcons } from "@expo/vector-icons";
import { ModalCart } from "../../components/ModalCart";
import { StatusBar } from "../../components/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { CardVertical } from "../../components/CardVertical";
import { IProductObject } from "../../business/models/interfaces/IProduct";

export type Sheets = {
  [0]: number;
  [1]: string;
  [2]: string;
  [3]: number;
  [4]: string;
  [5]: string;
  [6]: string;
  [7]: string;
};

export function Inicio() {
  const [title, setTitle] = useState<Sheets[]>([]);
  useEffect(() => {
    async function getStoreData() {
      await api.get("/getRows").then(function (response) {
        setTitle(response.data);
      });
    }
    getStoreData();
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  function openScreen(item: Sheets) {
    navigation.navigate("Produto", { item });
  }

  return (
    <S.Container>
      <StatusBar />

      <S.Carrosel>
        <S.Image
          source={{
            uri: `https://instagram.fssz1-1.fna.fbcdn.net/v/t51.2885-15/175524349_1688765334658222_2432354789023444120_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fssz1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=L6cMoG-cJ28AX_L99Ch&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU1NTM3ODA2NDYyMjk3MjU1MA%3D%3D.2-ccb7-5&oh=00_AfDDQx6KlYrXsgargQ6eHpSffN5TA3PE-p0dMZDn5jPKAQ&oe=6373D981&_nc_sid=30a2ef`,
          }}
        />
        <S.ButtonLeft>
          <MaterialIcons name="arrow-back-ios" size={24} color="red" />
        </S.ButtonLeft>
        <S.ButtonRight>
          <MaterialIcons name="arrow-forward-ios" size={24} color="red" />
        </S.ButtonRight>
      </S.Carrosel>

      <S.ThreeDots>
        <Entypo name="dot-single" size={24} color="red" />
        <Entypo name="dot-single" size={24} color="white" />
        <Entypo name="dot-single" size={24} color="white" />
      </S.ThreeDots>

      <SearchBar></SearchBar>

      <S.CardContainer>
        <FlatList
          data={title}
          keyExtractor={(item) => item[0].toString()}
          renderItem={({ item }) => (
            <CardVertical data={item} onPress={() => openScreen(item)} />
          )}
        />
      </S.CardContainer>
    </S.Container>
  );
}
