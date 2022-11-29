import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import * as S from "./style";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Form } from '../../components/Form';
import { HeaderContato } from "../../components/HeaderContato";
import { FormEmail } from "../../components/FormEmail";
import { Whatsapp } from "../../components/Whatsapp";
export function Contato() {
    const navigation = useNavigation();
    const route = useRoute();

    return (

        <S.Container>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="height" enabled>
          <>
            <HeaderContato />
            <FormEmail />
            <S.Or>OU</S.Or>
            <Whatsapp/>
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

        </S.Container>

    )
}