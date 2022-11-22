import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator, Group } = createNativeStackNavigator();

import { Inicio } from '../Screens/Inicio';
import { Historico } from '../Screens/Historico';
import { Pedidos } from '../Screens/Pedidos';
import { Contato } from '../Screens/Contato';
import { Produto } from '../Screens/Produto';
import { Formulario } from '../Screens/Formulario';
import { Enviar } from '../Screens/Enviar';

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

export function IniPro() {

    return (
        <Navigator>
            <Group>
                <Screen
                    name='Inicio'
                    component={Inicio}
                    options={{
                        headerShown: false,
                    }}
                />
            </Group>

            <Screen
                name='Produto'
                component={Produto}
                options={{
                    headerShown: false,

                    title: 'Tela B',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Screen
                name='Formulario'
                component={Formulario}
                options={{
                    headerShown: false,

                    title: 'Tela C',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Screen
                name='Enviar'
                component={Enviar}
                options={{
                    headerShown: false,

                    title: 'Tela D',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: 'white',
                }}
            />

        </Navigator>
    )
}

export function IniHis() {

    return (
        <Navigator>
            <Screen
                name='Historico'
                component={Historico}
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: 'white',
                }}
            />
        </Navigator>
    )

    
}