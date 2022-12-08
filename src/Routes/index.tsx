import { IniPro } from "./stack.routes";
import * as Network from "expo-network";
import { TabRoutes } from "./tab.routes";
import theme from "../global/styles/theme";
import { useEffect, useState } from "react";
import { DrawerRoutes } from "./drawer.routes";
import { color } from "react-native-reanimated";
import { Internet } from "../components/Internet";
import { LoadingPage } from "../components/LoadingPage";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.red, width: "90%" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "400",
        fontFamily: theme.fonts.title,
        color: theme.colors.red,
      }}
      text2Style={{
        fontSize: 12,
        fontWeight: "400",
        fontFamily: theme.fonts.text,
      }}
    />
  ),
};

export function Routes() {
  const [hasInternet, setHasInternet] = useState<boolean | undefined>(true);

  const checkInternet = async () => {
    const boolInternet = (await Network.getNetworkStateAsync()).isConnected;
    setHasInternet(boolInternet);
  };

  checkInternet();

  return (
    <>
      <NavigationContainer>
        <DrawerRoutes />
        <Toast config={toastConfig} />
      </NavigationContainer>
      {hasInternet ? null : <Internet />}
      {hasInternet ? null : <LoadingPage />}
    </>
  );
}
