import React from 'react';
import * as S from './style';
import { DrawerItemList } from '@react-navigation/drawer'
import logo from "../../assets/splashsquare.png";


export function CustomDrawer({...props}) {
  return (
    <S.Container>
        <S.ImgContainer>
            <S.Imagelmao
             source={require("../../assets/splashsquare.png")}
            />
        </S.ImgContainer>
        <DrawerItemList {...props}/>
    </S.Container>
  );
}