import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import * as S from "./style";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
export function Formulario() {
    const navigation = useNavigation();
    const route = useRoute();

    return (

        <S.Container>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

        </S.Container>

    )
}