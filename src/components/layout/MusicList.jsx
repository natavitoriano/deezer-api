import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import ButtonFavorite from './ButtonFavorite.jsx'
import ButtonPlayPause from './ButtonPlayPause.jsx'

import { SiApplemusic } from 'react-icons/si'
import { 
    List, 
    ImgAlbum, 
    ListItem, 
    ContainerListItem, 
    FlexRow, 
    FlexColumn, 
    ButtonCompletMusic,
    Artist,
    Title,
    StrListSmall,
    IconSad,
    ContainerMessage} from './MusicList'
import { TitlePages } from '../../assets/style/style.js'
import { updateMusics,  idMusicPlay } from '../../store/actions/actionMusics'



class MusicList extends Component{
    state = {
        limit: 10
    }

    completMusic(url){
        window.open(url, "_blank")
    }

    async scrollBottom(e){
        let scrollAt = Math.round(e.target.scrollHeight - e.target.scrollTop)
        let scrollTot = Math.round(e.target.clientHeight)
        if(this.props.typeList === 'home' && this.props.mode !== 'search' ){
                if(Math.abs(scrollAt-scrollTot) <= 1){
                await this.setState({limit: this.state.limit + 10})
                    const api = axios.create({
                        baseURL: `http://localhost:8080/getCharts/${this.state.limit}/10`,
                    })
                    
                    api.get('').then(res => this.props.upMusics(this.props.musics.concat(res.data.tracks.data)))
            }
        }
        if(this.props.mode === 'search'){
            if(Math.abs(scrollAt-scrollTot) <= 1){
                    await this.setState({limit: this.state.limit + 10})
                    const api = axios.create({
                        baseURL: `http://localhost:8080/search`,
                    })
                    const resp = await api.get(`${this.props.inputSearch}/${this.state.limit}/10`)
                    let array = resp.data.data.filter((item) =>{
                        if(this.props.musics.some(e => e.id === item.id)) return null
                        return item
                    })
                    this.props.upMusics(this.props.musics.concat(array)) 
            }
        }
        
    }

    async componentDidMount(){
        this.props.idMusics('')
        const api = axios.create({
            baseURL: `http://localhost:8080/getCharts/0/${this.state.limit}`,
        })
        const response = await api.get('')
        this.props.upMusics(response.data.tracks.data)
    }

    getView = () => {
        return this.props.typeList === 'home'? true : false
    }

    render(){    
        const arrayMusic = this.getView()? this.props.musics : this.props.favorites
        return(
            <div>
                <ContainerMessage visible={Array.from(this.props.favorites).length} view={this.props.mode}>
                    <TitlePages>Ops!!! Você ainda não adicionou músicas!</TitlePages>
                    <IconSad />
                </ContainerMessage>
                <audio id='player-audio' src={this.props.urlMusicPlay}></audio>
                <List onScroll={e => this.scrollBottom(e)}>
                    {arrayMusic.map(music => (            
                        <ListItem key={music.id}>
                            <ImgAlbum src={music.album.cover_xl} alt={music.title}></ImgAlbum>
                            <ContainerListItem>
                                <FlexRow>
                                    <Title>{music.title}</Title>
                                    <ButtonFavorite typeList={this.props.typeList}musicItem={music}></ButtonFavorite>      
                                </FlexRow>
                                <Artist>{music.artist.name}</Artist>
                                <StrListSmall>Duração: {music.duration}</StrListSmall>
                                <FlexRow margin>
                                    <FlexColumn>
                                        <StrListSmall>Preview</StrListSmall>
                                        <ButtonPlayPause musicId={music.id} musicPreview={music.preview}></ButtonPlayPause>
                                    </FlexColumn>
                                    <FlexColumn>
                                        <StrListSmall>Música Completa</StrListSmall>
                                        <ButtonCompletMusic onClick={e => this.completMusic(music.link)}>
                                            <SiApplemusic/>
                                        </ButtonCompletMusic>
                                    </FlexColumn>
                                </FlexRow>
                            </ContainerListItem>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        musics: state.reducerMusics.musics,
        favorites: state.reducerMusics.favorites,
        idMusicPlay: state.reducerMusics.idMusicPlay,
        mode: state.reducerMusics.mode,
        inputSearch: state.reducerMusics.inputSearch,
        urlMusicPlay: state.reducerMusics.urlMusicPlay
    }
}

function mapDispatchToProp(dispatch) {
    return{
        upMusics(newMusics){
            const action = updateMusics(newMusics)
            dispatch(action)
        },
        idMusics(id){
            const action = idMusicPlay(id)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(MusicList)


