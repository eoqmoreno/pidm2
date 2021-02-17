import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { estilo } from '../style/style'
import Card from './Card'
import CardItem from './CardItem'

export class AlbumDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musicas: [],
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums/' + this.props.id + '/tracks.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    musicas: responseJson.tracks,
                })
            })
    }

    render() {

        let lista = []

        this.state.musicas.map((item, index) => {
            lista.push(<Text key={index}>{index + 1} - ({item.duration}) - {item.title}</Text>)
        })

        return (
            <Card>
                <CardItem>
                    <Text style={estilo.title}>
                        {this.props.title}
                    </Text>

                    <Text style={estilo.subtitle}>
                        {this.props.artista}
                    </Text>
                </CardItem>

                <CardItem>
                    <Image source={"https://raw.githubusercontent.com/san650/ten/master/apps/music" + this.props.imagem} style={estilo.imagem}></Image>
                </CardItem>

                <CardItem>
                    <Button title="Ver musicas" color="grey" onPress={() => { this.props.navigation.navigate('Modal', { lista: lista, artist: this.props.artista }) }}>
                    </Button>

                    <Button title="Comprar" color="rgb(27, 210, 27)">
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

export default AlbumDetail
