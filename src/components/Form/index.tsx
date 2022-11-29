import React from 'react';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 } from 'uuid';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type InfoProps = {
  name: string;
  cpf:string,
  email: string;
  cep: string;
  smartphone: string;
  residencia: string;

}
const { getItem, setItem } = useAsyncStorage("@saveinfo:personalinfo");

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  cpf: yup.string().min(11, "Escreva o CPF/CNPJ completo").required("Informe o seu CPF/CNPJ"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  cep: yup.string().required("Informe o CEP"),
  smartphone: yup.string().min(8, "Número de telefone inválido").required("Informe o telefone"),

});

export function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm<InfoProps>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    console.log(data);
  }

  const navigation = useNavigation();


  function openScreen() {
    navigation.goBack();
    navigation.navigate('Enviar')

  }



  async function handleFormInfo(personalInfo: InfoProps) {
    try {
      // const id = v4();

      


      await setItem(JSON.stringify(personalInfo))

      const response = await getItem();
      console.log(response)

       
      openScreen();
      
    
    } catch (error) {
      console.log(error)      
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
        placeholder="CPF/CNPJ"
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
        title="Continuar com o pedido"
        onPress={handleSubmit(handleFormInfo)}
      />
    </Container>
  )
}