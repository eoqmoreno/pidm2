import React, { Component } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { style } from './style';

export default class Home extends Component {
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Cadastro')}>
                    <Text style={style.buttonText}>
                        Cadastro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('IMC')}>
                    <Text style={style.buttonText}>
                        IMC
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('About')}>
                    <Text style={style.buttonText}>
                        Sobre
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}