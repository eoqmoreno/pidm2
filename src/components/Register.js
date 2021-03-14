import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import ButtonEdit from './ButtonEdit'
import Card from './Card'
import CardItem from './CardItem'
import { style } from './Style'
import firestore from '@react-native-firebase/firestore'



export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Register student",
            name: "",
            age: "",
            course: "",
            id: "",
            action: this.addAluno,
        }
    }

    componentDidMount() {
        if (this.props.route.params) {
            this.setState({
                title: "Update student",
                name: this.props.route.params.name,
                age: this.props.route.params.age,
                course: this.props.route.params.course,
                id: this.props.route.params.id,
                action: this.updateData,
            })
        }

    }

    addAluno = () => {
        if (this.state.name == "") {
            alert("Write your name!")
        } else {
            if (this.state.age == "") {
                alert("Write your age!")
            } else {
                if (this.state.course == "") {
                    alert("Write your course!")
                } else {
                    this.sendData()
                }
            }
        }
    }

    sendData = () => {
        firestore()
            .collection('alunos')
            .add({
                nome: this.state.name,
                idade: this.state.age,
                curso: this.state.course,
            })
            .then(() => {
                this.props.navigation.navigate('home');
            });
    }

    updateData = () => {
        firestore()
            .collection('alunos')
            .doc(this.state.id)
            .update({
                nome: this.state.name,
                idade: this.state.age,
                curso: this.state.course,
            })
            .then(() => {
                this.props.navigation.navigate('home');
            });
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={style.title}>
                        {this.state.title}
                    </Text>
                </CardItem>

                <CardItem>
                    <TextInput placeholder="Name" value={this.state.name} style={style.input} onChangeText={(name) => { this.setState({ name: name }) }}>
                    </TextInput>
                </CardItem>

                <CardItem>
                    <TextInput placeholder="Age" value={this.state.age} style={style.input} keyboardType="numeric" onChangeText={(age) => { this.setState({ age: age }) }}>
                    </TextInput>
                </CardItem>

                <CardItem>
                    <TextInput placeholder="Course" value={this.state.course} style={style.input} onChangeText={(course) => { this.setState({ course: course }) }}>
                    </TextInput>
                </CardItem>

                <ButtonEdit btn="confirm" action={() => { this.state.action() }}>
                    Submits
                </ButtonEdit>

                <ButtonEdit btn="delete" action={(e) => { this.props.navigation.goBack() }}>
                    Exit
                </ButtonEdit>
            </Card>
        )
    }
}

export default Register