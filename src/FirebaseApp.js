import React, { Component } from 'react'
import { Alert, Modal, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Card from './components/Card'
import CardItem from './components/CardItem'
import ButtonEdit from './components/ButtonEdit'
import { style } from './components/Style'

export class FirebaseApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alunos: [],
        }
    }

    componentDidMount() {
        this.listAlunos()
    }

    listAlunos = () => {
        firestore()
            .collection('alunos')
            .orderBy('nome')
            .get()
            .then(result => {
                let alunos = []
                result.forEach(aluno => {
                    alunos.push(aluno)
                });
                this.setState({
                    alunos
                })
            });
    }

    removeData = (id) => {
        firestore()
            .collection('alunos')
            .doc(id)
            .delete()
            .then(() => {
                this.listAlunos()
            });
    }

    renderAluno = () => {
        let list = []
        let action =
            this.state.alunos.map((result, index) => {
                list.push(
                    <View style={style.flex} key={index}>
                        <Text>{result.data().nome}</Text>
                        <Text>{result.data().idade}</Text>
                        <Text>{result.data().curso}</Text>
                        <View style={style.flex}>
                            <ButtonEdit action={() => { this.props.navigation.navigate('register', { name: result.data().nome, age: result.data().idade, course: result.data().curso, id: result.id }) }}>Edit</ButtonEdit>
                            <ButtonEdit btn="delete" action={() => { this.modal(result.id, true) }}>Delete</ButtonEdit>
                        </View>
                        {this.modal(result.id)}
                    </View>
                )
            })
        return list
    }

    modal = (id, state) => {
        if (state === true) {
            Alert.alert(
                'Delete',
                'You have shure?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => this.listAlunos(),
                        style: 'cancel',
                    },
                    {
                        text: 'Delete',
                        onPress: () => this.removeData(id)
                    },
                ],
                { cancelable: false },
            );
        }
    }

    render() {
        return (
            <Card>
                <CardItem style={style.flex}>
                    <Text style={style.title}>
                        Students
                    </Text>
                    <ButtonEdit action={() => { this.listAlunos() }}>
                        Update
                    </ButtonEdit>
                </CardItem>

                <CardItem>
                    {this.renderAluno()}
                </CardItem>
                <CardItem>
                    <ButtonEdit btn="confirm" action={() => { this.props.navigation.navigate('register') }}>
                        Register
                    </ButtonEdit>
                </CardItem>
            </Card>
        )
    }
}

export default FirebaseApp
