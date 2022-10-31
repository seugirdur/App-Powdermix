import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "../../components/StatusBar";



export function Produto() {
  return (

      <S.Container>

        <StatusBar/>

        <S.Carrosel>
          <S.Image
          source={{ uri: `https://powdermix.com.br/wp-content/uploads/2022/05/quem-somos-1024x684.jpg` }}
          ></S.Image>
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

        <S.Prices>
          <S.OriginalPrice></S.OriginalPrice>
          <S.PromocionalPrice></S.PromocionalPrice>
        </S.Prices>

        <S.Name>
          <S.Title></S.Title>
          <S.BigName></S.BigName>
        </S.Name>
        
        <S.ButtonBuy/>

        <S.Description>
          <S.Title></S.Title>
          <S.text></S.text>
        </S.Description>

        <S.Video></S.Video>

        <S.Hyperlink></S.Hyperlink>

        <S.Carrosel>
          <S.Title></S.Title>
          <S.VerticalCarrosel>
            <S.VerticalCard/>
          </S.VerticalCarrosel>

        </S.Carrosel>



      </S.Container>





  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});


