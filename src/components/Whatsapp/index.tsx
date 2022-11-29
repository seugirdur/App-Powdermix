import React from 'react';
import { View } from 'react-native';
import { Fontisto, Entypo } from "@expo/vector-icons";
import * as S from './style';
import * as Linking from 'expo-linking';

export function Whatsapp() {
  return (

    <S.Container>
<Fontisto
                            name="whatsapp"
                            size={48}
                            color="white"
                            style={{ top: -1 }}
                          />

                          <S.ContainerPostZap>
                            <S.ButtonZap
                                    onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5511991745936')}

                            >
                                <S.TextoZap>NOS CHAME NO WHATSAPP</S.TextoZap>
                            </S.ButtonZap>
                          </S.ContainerPostZap>

    </S.Container>
  );
}