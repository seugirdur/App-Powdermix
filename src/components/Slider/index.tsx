import * as S from "./style";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  FlatList,
  Modal,
  ScrollView,
  Dimensions,
  View,
  Image,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;
//funcao que cria os sliders 
export function Slider({ images }: any) {
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <>
      <S.Carrosel>
        <View style={{ width, height }}>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={change}
            style={{ width, height }}
          >
            {images.map((image: string, index: number) => (
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
        {images.map((i: string, k: number) => (
          <Entypo
            key={k}
            style={k == active ? style.pagginActiveIcon : style.pagginIcon}
            name="dot-single"
            size={24}
            color="white"
          />
        ))}
      </S.ThreeDots>
    </>
  );
}

const style = StyleSheet.create({
  pagginIcon: { color: "white" },
  pagginActiveIcon: { color: "red" },
});
