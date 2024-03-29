import React from "react";
import { v4 } from "uuid";
import * as yup from "yup";
import { Button } from "../Button";
import { Container } from "./styles";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { cpf, cnpj } from "cpf-cnpj-validator";
import { ControlledInput } from "../ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export type InfoProps = {
  name: string;
  cpf: string;
  email: string;
  cep: string;
  smartphone: string;
  residencia: string;
};
const { getItem, setItem } = useAsyncStorage("@saveinfo:personalinfo");

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  // cpf: yup.string().min(11, "Escreva o CPF/CNPJ completo").required("Informe o seu CPF/CNPJ"),
  cpf: yup
    .string()
    .required("Informe o CNPJ")
    .test("test-invalid-cpf", "CNPJ inválido", (cnpj1) => cnpj.isValid(cnpj1)),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  cep: yup.string().required("Informe o CEP"),
  smartphone: yup
    .string()
    .min(8, "Número de telefone inválido")
    .required("Informe o telefone"),
});
//formulario para preenchimento de informações
export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoProps>({
    resolver: yupResolver(schema),
  });

  function handleUserRegister(data: FormData) {}

  const navigation = useNavigation();

  function openScreen() {
    navigation.goBack();
    navigation.navigate("Enviar");
  }
  //armazenando informações do cliente
  async function handleFormInfo(personalInfo: InfoProps) {
    try {
      await setItem(JSON.stringify(personalInfo));

      const response = await getItem();

      openScreen();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon="user"
        placeholder="Nome"
        error={errors.name}
      />
      <ControlledInput
        name="cpf"
        control={control}
        icon="file-text"
        placeholder="CNPJ"
        error={errors.cpf}
      />

      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <ControlledInput
        name="cep"
        control={control}
        icon="home"
        placeholder="CEP"
        error={errors.cep}
      />
      <ControlledInput
        name="smartphone"
        control={control}
        icon="smartphone"
        placeholder="Telefone"
        error={errors.smartphone}
      />

      <Button
        title="Continuar com o orçamento"
        onPress={handleSubmit(handleFormInfo)}
      />
    </Container>
  );
}
