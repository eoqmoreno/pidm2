import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { estilo } from '../style/style'
import CardItem from './CardItem'
import Header from './Header'

export class Modal extends Component {

    render() {
        return (
            <View style={estilo.container}>
                <CardItem>
                    <Text style={estilo.title}>
                        {this.props.route.params.artist}
                    </Text>
                    <Text style={estilo.subtitle}>
                        Lista de Músicas
                    </Text>
                </CardItem>

                <CardItem>
                    {this.props.route.params.lista}
                </CardItem>

                <CardItem>
                    <Button title="Voltar" color="red" onPress={()=>{this.props.navigation.navigate('Lista')}}></Button>
                </CardItem>
            </View>
        )
    }
}

export default Modal