import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Home from './Home';

const Stack = createNativeStackNavigator();

function Navigation() {

    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home">
            <Stack.Screen name= "Home" component= {Home}></Stack.Screen>
            <Stack.Screen name= "Details" component= {Details}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation;