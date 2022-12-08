import { v4 } from "uuid";
import * as yup from "yup";
import * as S from "./styles";
import { Button } from "../Button";
import { Alert } from "react-native";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import * as MailComposer from "expo-mail-composer";
import { ControlledInput } from "../ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export type EmailProps = {
  name: string;
  desc: string;
};
const { getItem, setItem } = useAsyncStorage("@saveinfo:personalinfo");

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  desc: yup.string().required("Descreva algo no corpo da descrição"),
});

export function FormEmail() {
  const [isAvaliable, setIsAvaliable] = useState(false);

  useEffect(() => {
    async function checkAvaliability() {
      const isMailAvaliable = await MailComposer.isAvailableAsync();
      setIsAvaliable(isMailAvaliable);
    }

    checkAvaliability();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailProps>({
    resolver: yupResolver(schema),
  });

  function handleUserRegister(data: FormData) {}

  const navigation = useNavigation();

  function openScreen() {
    navigation.goBack();
    navigation.navigate("Enviar");
  }

  async function handleFormInfo(wholeEmail: EmailProps) {
    try {
      await setItem(JSON.stringify(wholeEmail));

      const response = await getItem();

      openScreen();
    } catch (error) {
      console.log(error);
    }
  }

  const SendEmail = (wholeEmail: EmailProps) => {
    function addHours(date: Date, hours: number) {
      date.setHours(date.getHours() + hours);
      const legalDate = date.toUTCString();

      return legalDate;
    }
    const someDate = new Date();

    const dataCompleta = addHours(someDate, -3);

    MailComposer.composeAsync({
      subject: wholeEmail.name + " Feedback Powdermix - " + dataCompleta,
      body: wholeEmail.desc,
      recipients: ["contato@powdermix.com.br"],
    });
  };

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon="user"
        placeholder="Nome Completo"
        error={errors.name}
      />
      <ControlledInput
        name="desc"
        control={control}
        icon="file-text"
        placeholder="Ponha aqui a descrição que irá para o e-mail da Powdermix"
        error={errors.desc}
        multiline={true}
        numberOfLines={8}
      />

      {isAvaliable ? (
        <Button
          title="Enviar E-mail"
          onPress={handleSubmit(SendEmail)}
        />
      ) : (
        <S.TextError>Lmao not today</S.TextError>
      )}
    </Container>
  );
}
