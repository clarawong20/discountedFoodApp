import { registerRootComponent } from 'expo';
import HomeScreen from "./navigation/screens/HomeScreen"
import MapScreen from "./navigation/screens/MapScreen"
import FavScreen from "./navigation/screens/FavouriteScreen";
import AccountScreen from './navigation/screens/AccountScreen';

export const themeColors={
    text: '#f97316',
    bgColor: opacity=> 'rgba{251,146,60,${opacity})'
}

export {
    HomeScreen,
    MapScreen,
    FavScreen,
    AccountScreen
}
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
