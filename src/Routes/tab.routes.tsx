import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
const { Screen, Navigator, Group } = createBottomTabNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';
import { ScreenC } from '../Screens/ScreenC';
import { ScreenD } from '../Screens/ScreenD';


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
                    name='screenA'
                    component={ScreenA}
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
                name='screenB'
                component={ScreenB}
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
                name='screenC'
                component={ScreenC}
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
                name='screenD'
                component={ScreenD}
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