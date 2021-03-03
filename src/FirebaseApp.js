import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'

export class FirebaseApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            aluno: '',
        }
        this.buscarAlunos();
    }
    
    buscarAlunos = async () =>{
        const aluno = await firestore().collection('alunos').doc('vCy5FCweoHFrc1kl5RdZ').get()
        this.setState({
            aluno: aluno._data.nome,
        })
    }

    render() {


        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight:'bold', fontSize:25}}>
                    {this.state.aluno}
                </Text>
            </View>
        )
    }
}

export default FirebaseApp
