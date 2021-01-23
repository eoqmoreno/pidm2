import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'
import { style } from './style'

export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            peso: 0,
            altura: 0,
        }
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput placeholder="Peso (Kg)" style={style.textInput} onChangeText={(peso)=>this.setState({peso: peso})}>
                </TextInput>
                <TextInput placeholder="Altura (cm)" style={style.textInput} onChangeText={(altura)=>this.setState({altura: altura/100})}>
                </TextInput>
                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Resultado',{peso: this.state.peso, altura: this.state.altura} )}>
                    <Text style={style.buttonText}>
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default IMC
