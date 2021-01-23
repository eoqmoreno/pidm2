import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { style } from './style'

export class Resultado extends Component {
    render() {
        let imc = this.props.route.params.peso / (this.props.route.params.altura ^ 2)
        let situacao = "";
        if (imc < 17 && imc != "") {
            situacao = "Muito abaixo do peso";
        } else if (imc > 17 && imc < 18.49) {
            situacao = "Abaixo do peso";
        } else if (imc > 18.5 && imc < 24.99) {
            situacao = "Peso normal";
        } else if (imc > 25 && imc < 29.99) {
            situacao = "Acima do peso";
        } else if (imc > 30 && imc < 34.99) {
            situacao = "Obesidade 1";
        } else if (imc > 35 && imc < 39.99) {
            situacao = "Obesidade 2";
        } else if (imc > 40) {
            situacao = "Obesidade 3";
        }
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    {imc}
                </Text>
                <Text style={style.title}>
                    {situacao}
                </Text>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={style.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Resultado
