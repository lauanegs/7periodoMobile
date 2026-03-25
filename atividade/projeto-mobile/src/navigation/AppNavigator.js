import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';
import HomeScreen from '../screens/HomeScreen';
 
const Drawer = createDrawerNavigator(); 
 
function AbasScreen() { 
    return <ModalTabsNavigator/>;
}

function ScrollScreen() { 
    return <ScrollTabsNavigator/>; 
}
 
export default function AppNavigator() { 
    return ( 
        <NavigationContainer> 
            <Drawer.Navigator> 
                <Drawer.Screen name="Home" component={HomeScreen} /> 
                <Drawer.Screen name="Navegação por abas" component={AbasScreen} /> 
                <Drawer.Screen name="Scroll" component={ScrollScreen} />
            </Drawer.Navigator> 
        </NavigationContainer> 
    ); 
}