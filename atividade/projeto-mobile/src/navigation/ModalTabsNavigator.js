import { SafeAreaProvider } from "react-native-safe-area-context";
import ModalFadeScreen from "../screens/modals/ModalFadeScreen";
import ModalNoneScreen from "../screens/modals/ModalNoneScreen";
import ModalSlideScreen from "../screens/modals/ModalSlideScreen";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function ModalTabsNavigator() {
  return (
    <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{
            headersShown: false,
            tabBarActiveTintColor: '#000',
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: 'bold'
            }
          }}
        >
          <Tab.Screen name='SLIDE'>
            {() => <ModalSlideScreen animation="slide" themeColor="#2196F3" />}
          </Tab.Screen>

          <Tab.Screen name='FADE'>
            {() => <ModalFadeScreen animation="fade" themeColor="#4caf50" />}
          </Tab.Screen>

          <Tab.Screen name='NONE'>
            {() => <ModalNoneScreen animation="none" themeColor="#ff9800" />}
          </Tab.Screen>
        </Tab.Navigator>
    </SafeAreaProvider>
  );
}

