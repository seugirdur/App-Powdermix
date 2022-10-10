import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons} from '@expo/vector-icons'

const { Screen, Navigator, Group } = createDrawerNavigator();

import { ScreenA } from '../Screens/ScreenA';
import { ScreenB } from '../Screens/ScreenB';


export function DrawerRoutes() {

    return (
        <Navigator>
            <Group>
                <Screen
                    name='screenA'
                    component={ScreenA}
                    options={{
                        drawerLabel: 'Cadastrar',
                        drawerIcon: () => <MaterialIcons name="home" size={22} />
                    }}
    
                />
            </Group>
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel: 'Sair',
                    drawerIcon: () => <MaterialIcons name="logout" size={22} />
                }}
            />

        </Navigator>
    )
}