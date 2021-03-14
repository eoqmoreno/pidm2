import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { style } from './Style'

export class ButtonEdit extends Component {
    render() {
        let styleBtn = style.classic
        if(this.props.btn === "confirm"){
            styleBtn = style.confirm
        }
        if(this.props.btn === "delete"){
            styleBtn = style.delete
        }

        return (
            <TouchableOpacity onPress={this.props.action} style={styleBtn}>
                <Text style={style.buttonText}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonEdit
