import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScrollViewScreen from "../screens/scroll/ScrollViewScreen";
import FlatListScreen from "../screens/scroll/FlatListScreen";
import SectionListScreen from "../screens/scroll/SectionListScreen";

const Tab = createBottomTabNavigator();

export default function ScrollTabsNavigator() {
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
          <Tab.Screen name='SCROLL VIEW'>
            {() => <ScrollViewScreen />}
          </Tab.Screen>

          <Tab.Screen name='FLAT LIST'>
            {() => <FlatListScreen />}
          </Tab.Screen>

          <Tab.Screen name='SECTION LIST'>
            {() => <SectionListScreen />}
          </Tab.Screen>

        </Tab.Navigator>
    </SafeAreaProvider>
  );
}

