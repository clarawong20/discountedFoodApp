import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import AccountScreen from './screens/AccountScreen';

//Screen names
const homeName = "Home ";
const mapName = "Map";
const favouriteName = "Favourite";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';

            } else if (rn === favouriteName) {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            else if (rn === accountName) {
                iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={favouriteName} component={FavouriteScreen} />
        <Tab.Screen name = {accountName} component={AccountScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;