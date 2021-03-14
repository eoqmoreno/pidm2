import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FirebaseApp from '../FirebaseApp';
import Register from './Register';

const Rote = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>

            <Rote.Navigator initialRouteName="home">

                <Rote.Screen name="home" component={FirebaseApp} options={{title: "Home Page"}}></Rote.Screen>
                <Rote.Screen name="register" component={Register} options={{title: "Register"}}></Rote.Screen>

            </Rote.Navigator>

        </NavigationContainer>
    )
}