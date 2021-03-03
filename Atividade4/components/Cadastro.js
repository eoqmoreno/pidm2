import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'
import { style } from './style'

export class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome:"",
            idade:"",
            email:""
        }
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.textInput} placeholder="Nome" onChangeText={(nome)=>{this.setState({nome:nome})}}></TextInput>

                <TextInput style={style.textInput} placeholder="Idade" onChangeText={(idade)=>{this.setState({idade:idade})}}></TextInput>

                <TextInput style={style.textInput} placeholder="E-mail" onChangeText={(email)=>{this.setState({email:email})}}></TextInput>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Perfil',{nome: this.state.nome, idade: this.state.idade, email:this.state.email})}>
                    <Text style={style.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Cadastro
