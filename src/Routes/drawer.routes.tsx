import { Button, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator, Group } = createDrawerNavigator();

import { FAQ } from "../Screens/FAQ";
import { TabRoutes } from "./tab.routes";
import { Inicio } from "../Screens/Inicio";
import theme from "../global/styles/theme";
import { Historico } from "../Screens/Historico";
import { CustomDrawer } from "../components/CustomDrawer";

export function DrawerRoutes() {
  return (
    <Navigator
    drawerContent={CustomDrawer}

    >
      <Group

      >
        <Screen

          name="Inicio"
          component={TabRoutes}
          options={{
            headerShown: false,
            drawerActiveTintColor: `${theme.colors.red}`,
            drawerLabel: "Início",
            drawerIcon: () => <MaterialIcons name="home" size={22} />,
          }}
        />
      </Group>
      <Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerShown: false,
          drawerActiveTintColor: `${theme.colors.red}`,

          drawerLabel: "FAQ",
          drawerIcon: () => (
            <MaterialCommunityIcons name="message-question" size={22} />
          ),
        }}
      />
    </Navigator>
  );
}
