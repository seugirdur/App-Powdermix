import React, { useCallback, useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import {
  useRoute,
  DrawerActions,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { StatusBar } from "../../components/StatusBar";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as S from "./style";
import logo from "../../assets/onlyname.png";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { SalesProps } from "../Enviar";
import { LoadingPage } from "../../components/LoadingPage";


const { getItem, setItem } = useAsyncStorage("@savesales:sale");

export function Historico() {
  const [historic, setHistoric] = useState<SalesProps[]>([]);
  

  const loadHistoric = async () => {
    const getHistoric = await getItem();

    const Historic: SalesProps[] = getHistoric ? JSON.parse(getHistoric) : [];

    setHistoric(Historic);
  };
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      loadHistoric();
    }, [])
  );

  

  function openScreen() {
    navigation.goBack();
    navigation.navigate('Pedidos')

  }

  return (
    <>
    <S.Container>
      <StatusBar />

      <S.ContentContainer>
        <FlatList
          ListHeaderComponent={
            <>
              <S.TitleHistoric>Histórico</S.TitleHistoric>
            </>
          }
          data={historic}
          extraData={historic}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <S.FlatlistContainer

              >
                <S.CardHistoric
                              onPress={openScreen}

                >
                  <S.TitleRow>
                    <S.TitleCard>Compra - </S.TitleCard>
                    <S.DateTitle>{item.dataCompra} | nº{item.id.substring(0,4)}</S.DateTitle>
                  </S.TitleRow>
                  <S.ValueRow>
                    <S.ValueLabel>Valor: </S.ValueLabel>
                    <S.ValueValue>
                      R${(Math.round(item.precoTotal * 100) / 100).toFixed(2)}
                    </S.ValueValue>
                  </S.ValueRow>
                  <S.HourRow>
                    <S.HourLabel>Horário: </S.HourLabel>
                    <S.HourValue>
                      {item.dataCompleta.substring(
                        17,
                        item.dataCompleta.length - 4
                      )}
                    </S.HourValue>
                  </S.HourRow>
                </S.CardHistoric>
              </S.FlatlistContainer>
            );
          }}
        />
      </S.ContentContainer>
    </S.Container>
    </>
  );
}
