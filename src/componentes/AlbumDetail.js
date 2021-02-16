import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { estilo } from '../style/style'

export class AlbumDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            musicas:[]
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums/'+this.props.id+'/tracks.json')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                musicas: responseJson.tracks,
            })
        })
    }

    render() {

        let lista = []

        this.state.musicas.map((item, index)=>{
        lista.push(<Text key={index}>{item.title}</Text>)
        })

        return (
            <View>
                <Text>
                    {this.props.title}
                </Text>
                <Text>
                    {this.props.artista}
                </Text>
                <Image source={"https://raw.githubusercontent.com/san650/ten/master/apps/music"+this.props.imagem} style={estilo.imagem}></Image>

                {lista}
            </View>
        )
    }
}

export default AlbumDetail
