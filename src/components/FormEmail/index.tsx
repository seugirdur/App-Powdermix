import React, { useEffect, useState } from 'react';
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
import * as MailComposer from 'expo-mail-composer';
import * as S from './styles'


export type EmailProps = {
  name: string;
  desc: string

}
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

  }, [])

  const { control, handleSubmit, formState: { errors } } = useForm<EmailProps>({
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



  async function handleFormInfo(wholeEmail: EmailProps) {
    try {
      // const id = v4();

      


      await setItem(JSON.stringify(wholeEmail))

      const response = await getItem();
      console.log(response)

       
      openScreen();
      
    
    } catch (error) {
      console.log(error)      
    }
  }

  const SendEmail = (wholeEmail: EmailProps) => {

    function addHours(date: Date, hours: number) {
      date.setHours(date.getHours() + hours);
      const makeitworkgoddamn = date.toUTCString();

      return makeitworkgoddamn;
    }
    // Date(Date.UTC()
    const someDate = new Date();
    // .toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"})
    // .getTimezoneOffset()

    const dataCompleta = addHours(someDate, -3);

    MailComposer.composeAsync({
      subject:wholeEmail.name+ " Feedback Powdermix - "+ dataCompleta,
      body:wholeEmail.desc,
      recipients:["contato@powdermix.com.br"]
    })
  }

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
        // style={{textAlignVertical:'top'}}
        error={errors.desc}
        multiline={true}
        numberOfLines={8}
      />
      


      { isAvaliable ? <Button
        title="Enviar E-mail"
        onPress={handleSubmit(SendEmail)}
        // onPress={SendEmail}
      /> : <S.TextError>Lmao not today</S.TextError>}
    </Container>
  )
}