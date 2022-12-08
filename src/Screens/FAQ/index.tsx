import * as React from 'react'
import { FontAwesome5 } 
from '@expo/vector-icons';
import { string } from 'yup';
import { MaterialIcons } from '@expo/vector-icons'; 
import {  } from '@expo/vector-icons'; 
import {
  Feather,
  Entypo,  
} from '@expo/vector-icons'; 
import * as S from './style'
import logo from '../../assets/onlyname.png'
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { StatusBar } from '../../components/StatusBar';
import { LoadingPage } from '../../components/LoadingPage';
import { Button, FlatList, Text, View } from 'react-native';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native'


type ParamsProps = {
  name: string;
}

type FaqProps = {
  [0]: string,
  [1]: string,
  [2]: string,
}

const theFaq = {
  titulo: string,
  descricao: string,
}


export function FAQ() {
  const [showLoading, setShowLoading] = useState(false);
  const [faq, setFaq] = useState<FaqProps[]>([])

  useEffect(() => {
  async function getStoreData() {
    setShowLoading(true);

    await api.get("/getFaq").then(function (response) {
      setFaq(response.data)
      setShowLoading(false);
    });


  }

  getStoreData();
}, []);


const navigation = useNavigation();
const route = useRoute();
  
  return (
    <>
    <S.Container>
    <StatusBar/>

    <S.ContainerFlat>

    <FlatList
      data={faq}
      ListHeaderComponent={
        <>
          <S.TitleHistoric>Perguntas Frequentes</S.TitleHistoric>
        </>
        }

      keyExtractor={(item) => item[0].toString()}
      renderItem={({ item }) => (
        <S.FlatContainer>
          <S.FaqTitleContainer>
            <S.FaqTitle>{item[1]}</S.FaqTitle>
          </S.FaqTitleContainer>
          <S.FaqDescricaoContainer>
            <S.FaqDescricao>{item[2]}</S.FaqDescricao>
          </S.FaqDescricaoContainer>
        </S.FlatContainer>
      )}
    />
    </S.ContainerFlat>

  </S.Container>
  {showLoading ? <LoadingPage /> : null}
  </>
);
}

