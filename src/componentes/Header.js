import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../style/style'

export class Header extends Component {
    render() {
        return (
            <View style={estilo.header}>
                <Text>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export default Header