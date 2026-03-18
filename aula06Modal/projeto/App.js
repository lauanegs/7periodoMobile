import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomModalScreen from "./components/CustomModal";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOpitions={{
            headersShown: false,
            tabBarActiveTintColor: '#000',
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: 'bold'
            }
          }}
        >
          <Tab.Screen name='SLIDE'>
            {() => <CustomModalScreen animation="slide" themeColor="#2196F3" />}
          </Tab.Screen>

          <Tab.Screen name='FADE'>
            {() => <CustomModalScreen animation="fade" themeColor="#4caf50" />}
          </Tab.Screen>

          <Tab.Screen name='NONE'>
            {() => <CustomModalScreen animation="none" themeColor="#ff9800" />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

