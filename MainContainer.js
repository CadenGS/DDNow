import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import QueueScreen from './screens/QueueScreen';
import MapScreen from './screens/MapScreen';
import AccountScreen from './screens/AccountScreen';
import settingsScreen from './screens/SettingsScreen';

const mapName = 'Map';
const queueName = 'Queue';
const accountName = 'Account';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={mapName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === mapName) {
                        iconName = focused ? 'compass' : 'compass-outline';

                    } else if (rn === queueName) {
                        iconName = focused ? 'albums' : 'albums-outline';

                    } else if (rn === accountName) {
                        iconName = focused ? 'person' : 'person-outline';

                    } else if (rn === settingsName) {
                        iconName = focused ? 'cog' : 'cog-outline';
    
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'lightBlue',
                tabBarInactiveTintColor: 'grey',
                style: { padding: 10, height: 70, backgroundColor: '#FFFFFF'}
            })}>

            <Tab.Screen name={queueName} component={QueueScreen}/>
            <Tab.Screen name={mapName} component={MapScreen}/>
            <Tab.Screen name={accountName} component={AccountScreen}/>
            <Tab.Screen name={settingsName} component={settingsScreen}/>

        </Tab.Navigator>
        </NavigationContainer>
    )
}