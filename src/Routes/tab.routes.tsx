import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
const { Screen, Navigator, Group } = createBottomTabNavigator();

import { Inicio } from '../Screens/Inicio';
import { Historico } from '../Screens/Historico';
import { Pedidos } from '../Screens/Pedidos';
import { Contato } from '../Screens/Contato';

import { IniPro, IniHis } from './stack.routes';


export function TabRoutes() {

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            }}>
            <Group>
                <Screen
                    name='IniPro'
                    component={IniPro}
                    options={{
                        tabBarLabel: 'Início',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )
                    }}

                />
            </Group>
            <Screen
                name='Historico'
                component={Historico}
                options={{
                    tabBarLabel: 'Histórico',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="history"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <Screen
                name='Pedidos'
                component={Pedidos}
                options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="list"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />


<Screen
                name='Contato'
                component={Contato}
                options={{
                    tabBarLabel: 'Contate-nos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                        name="whatsapp"
                        color={color}
                            size={size}
                            />
                    )
                }}
            />

        </Navigator>
    )
}