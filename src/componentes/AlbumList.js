import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AlbumDetail from './AlbumDetail'

export class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albuns: [],
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then(
            (response)=>response.json()
        )
        .then(
            (responseJson)=>{
                this.setState({
                    albuns: responseJson.albums
                })
        })
    }

    

    render() {

        let cards = []

        this.state.albuns.map((item, index) => {
            cards.push(<AlbumDetail key={index} title={item.name} artista={item.artist} imagem={item.image} id={item.id}></AlbumDetail>)
        })

        return (
            <View>
                <Text>
                    Galeria
                </Text>
                {cards}
            </View>
        )
    }
}

export default AlbumList
