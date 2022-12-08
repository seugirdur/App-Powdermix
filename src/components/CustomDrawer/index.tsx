import React from "react";
import * as S from "./style";
import logo from "../../assets/splashsquare.png";
import { DrawerItemList } from "@react-navigation/drawer";

export function CustomDrawer({ ...props }) {
  return (
    <S.Container>
      <S.ImgContainer>
        <S.Imagelmao source={require("../../assets/splashsquare.png")} />
      </S.ImgContainer>
      <DrawerItemList {...props} />
    </S.Container>
  );
}
