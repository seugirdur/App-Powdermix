import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons} from '@expo/vector-icons'
import { Button, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const { Screen, Navigator, Group } = createDrawerNavigator();

import { Inicio } from '../Screens/Inicio';
import { TabRoutes } from './tab.routes'
import { Historico } from '../Screens/Historico';
import { FAQ } from '../Screens/FAQ';



export function DrawerRoutes() {

    


    return (
        <Navigator
                   >
            <Group>
                <Screen
                    name='Inicio'
                    component={TabRoutes}
                    options={{
                        headerShown:false,
                        drawerLabel: 'Início',
                        drawerIcon: () => <MaterialIcons name="home" size={22} />
                    }}
    
                /> 
            </Group>
            <Screen
                name='FAQ'
                component={FAQ}
                options={{
                    headerShown:false,
                    drawerLabel: 'FAQ',
                    drawerIcon: () => <MaterialCommunityIcons name="message-question" size={22} />
                }}
            />

        </Navigator>
    )
}