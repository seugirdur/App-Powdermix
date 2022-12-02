import { NavigationContainer} from '@react-navigation/native';

import { IniPro } from './stack.routes';
import { DrawerRoutes } from './drawer.routes';
import { TabRoutes } from './tab.routes';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import theme from '../global/styles/theme';
import { color } from 'react-native-reanimated';
import { LoadingPage } from '../components/LoadingPage';
import { useEffect, useState } from 'react';
import * as Network from 'expo-network';
import { Internet } from '../components/Internet';



const toastConfig = {

  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.red, width: 370}}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: '400',
        fontFamily: theme.fonts.title,
        color: theme.colors.red
        
      }}
      text2Style={{
        fontSize: 12,
        fontWeight: '400',
        fontFamily: theme.fonts.text
        
      }}
    />
  )
}







export function Routes() {
  const [hasInternet, setHasInternet] = useState<boolean | undefined>(true);

  const lmao = async () => {
    const lmao2 = (await Network.getNetworkStateAsync()).isConnected;
    setHasInternet(lmao2);
    console.log(lmao2)
  }

  lmao();

return (
  <>
  <NavigationContainer>
    <DrawerRoutes/>
    <Toast config={toastConfig} />
  </NavigationContainer>
  { hasInternet ? null : <Internet/> }
  { hasInternet ? null : <LoadingPage/> }
  </>
  )

}