import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { style } from './style'

export class About extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Quem sou eu?
                </Text>
                <Text>
                    Eu sou George Moreno,
                </Text>
                <Text>
                    quase designer, quase desenvolvedor!
                </Text>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.goBack()}>
                    <Text style={style.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default About