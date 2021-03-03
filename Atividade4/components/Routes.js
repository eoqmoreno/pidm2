import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import IMC from './IMC';
import Resultado from './Resultado';
import Cadastro from './Cadastro';
import Perfil from './Perfil';

const Rotas = createStackNavigator();
const RotasGeral = createStackNavigator();

function RotasTelas() {
    return (
        <Rotas.Navigator initialRouteName="Home">
            <Rotas.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }}>
            </Rotas.Screen>

            <Rotas.Screen name="About" component={About} options={{ title: 'Sobre' }}>
            </Rotas.Screen>

            <Rotas.Screen name="IMC" component={IMC} options={{ title: 'IMC' }}>
            </Rotas.Screen>

            <Rotas.Screen name="Resultado" component={Resultado} options={{ title: 'Resultado' }}>
            </Rotas.Screen>

            <Rotas.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }}>
            </Rotas.Screen>

        </Rotas.Navigator>
    )
}

function RotasTelasGeral() {
    return (
        <NavigationContainer>
            <RotasGeral.Navigator>
                <RotasGeral.Screen name="Principal" component={RotasTelas} options={{ headerShown: false }}>
                </RotasGeral.Screen>
                <RotasGeral.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}></RotasGeral.Screen>
            </RotasGeral.Navigator>
        </NavigationContainer>
    )
}

export default RotasTelasGeral;