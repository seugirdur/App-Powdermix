import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator, Group } = createNativeStackNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';
import { ScreenC } from '../Screens/ScreenC';


export function StackRoutes() {

    return (
        <Navigator>
            <Group>
                <Screen
                    name='screenA'
                    component={ScreenA}
                    options={{
                        headerShown: false,
                    }}
                />
            </Group>
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',

                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'

                    },
                    headerTintColor: 'white',

                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    title: 'Tela C',

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