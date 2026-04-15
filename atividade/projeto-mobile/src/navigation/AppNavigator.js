import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ListScreen from '../screens/ListScreen';
import FormScreen from '../screens/FormScreen';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/camera/CameraScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="List" component={ListScreen} options={{ title: 'Lista de Aluguéis' }} />
      <Drawer.Screen name="Form" component={FormScreen} options={{ title: 'Novo Aluguel' }} />
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Modais" component={ModalTabsNavigator} />
      <Drawer.Screen name="Scroll" component={ScrollTabsNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="MainApp" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}