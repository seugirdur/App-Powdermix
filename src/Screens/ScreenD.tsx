import React from 'react';
import { Button, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'

//yarn add @types/react -D
// import { styles } from './styles';

type ParamsProps = {
  name: string;
}

export function ScreenD() {
const navigation = useNavigation();
const route = useRoute();
const { name } = route.params as ParamsProps;
  
  return (
    <View style={{flex:1, backgroundColor:'blue', alignItems:'center', justifyContent:'center' }}>
      <Text>
        { name }
      </Text>

      <Button title="turn back" onPress={() => navigation.goBack()}/>

    </View>
  );
}