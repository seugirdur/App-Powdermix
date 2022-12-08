import React from "react";
import * as S from "./style";
import { View } from "react-native";
import LottieView from "lottie-react-native";
//animação de loading enquanto a api não carrega
export function LoadingPage() {
  return (
    <S.Container>
      <LottieView source={require("../../assets/loading.json")} autoPlay loop />
    </S.Container>
  );
}
