import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AlbumList from './AlbumList';
import Modal from './Modal';
import AlbumDetail from './AlbumDetail';

const Rotas = createStackNavigator();

function RotasTelas(){
    return(
        <NavigationContainer>

            <Rotas.Navigator initialRouteName="Lista">

                <Rotas.Screen name="Lista" component={AlbumList} options={{title: 'Galeria'}}>
                </Rotas.Screen>

                <Rotas.Screen name="Detalhe" component={AlbumDetail}>
                </Rotas.Screen>

                <Rotas.Screen name="Modal"component={Modal} options={{headerShown: false}}>
                </Rotas.Screen>

            </Rotas.Navigator>

        </NavigationContainer>
    )
}

export default RotasTelas