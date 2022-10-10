import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'



export function ScreenA( ) {
  const navigation = useNavigation();


function openScreen() {
  navigation.navigate('screenB', {name: 'Rodrigo'})

}



  return (
    <View style={{flex:1,backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>

      <Button
          title="ir para a tela B"
          onPress={openScreen} />

    </View>
  );
}


