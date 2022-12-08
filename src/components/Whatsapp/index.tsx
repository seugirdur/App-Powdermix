import React from "react";
import * as S from "./style";
import { View } from "react-native";
import * as Linking from "expo-linking";
import { Fontisto, Entypo } from "@expo/vector-icons";

//componente do whatsapp para contato
export function Whatsapp() {
  return (
    <S.Container>
      <Fontisto name="whatsapp" size={48} color="white" style={{ top: -1 }} />

      <S.ContainerPostZap>
        <S.ButtonZap
          onPress={() =>
            Linking.openURL("https://api.whatsapp.com/send?phone=5511991745936")
          }
        >
          <S.TextoZap>NOS CHAME NO WHATSAPP</S.TextoZap>
        </S.ButtonZap>
      </S.ContainerPostZap>
    </S.Container>
  );
}
