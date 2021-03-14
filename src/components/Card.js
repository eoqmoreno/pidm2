import React, { Component } from 'react'
import { View } from 'react-native'
import { style } from './Style'

export class Card extends Component {
    render() {
        return (
            <View style={style.card}>
                {this.props.children}
            </View>
        )
    }
}

export default Card
