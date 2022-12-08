import React from "react";
import * as S from "./style";
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

//tela com os componentes de formulario
export function Formulario() {
    const navigation = useNavigation();
    const route = useRoute();

    return (

        <S.Container>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <>
            <Header />
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

        </S.Container>

    )
}