import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/camera/CameraScreen';
 
const Drawer = createDrawerNavigator(); 
 
function ModaisScreen() { 
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
                <Drawer.Screen name="Modais" component={ModaisScreen} /> 
                <Drawer.Screen name="Scroll" component={ScrollScreen} />
                <Drawer.Screen name="Camera" component={CameraScreen} />
            </Drawer.Navigator> 
        </NavigationContainer> 
    ); 
}