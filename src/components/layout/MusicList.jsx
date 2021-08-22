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

    //Função para abrir a música completa em uma outra página
    completMusic(url){
        window.open(url, "_blank")
    }

    //Função que detecta o movimento da barra de rolagem
    async scrollBottom(e){
        let scrollAt = Math.round(e.target.scrollHeight - e.target.scrollTop)
        let scrollTot = Math.round(e.target.clientHeight)

        //Verifica qual a página está em uso no momento
        if(this.props.typeList === 'home' && this.props.mode !== 'search' ){
                //Verifica se a barra de rolagem chegou ao final
                if(Math.abs(scrollAt-scrollTot) <= 1){
                await this.setState({limit: this.state.limit + 10})
                    const api = axios.create({
                        baseURL: `http://localhost:8080/getCharts/${this.state.limit}/10`,
                    })                
                    //Se a página chegou ao final adiciona mais 10 itens a lista
                    api.get('').then(res => this.props.upMusics(this.props.musics.concat(res.data.tracks.data)))
            }
        }
        //Verifica se o usuário está na lista de uma pesquisa
        if(this.props.mode === 'search'){
            //Verifica se a barra de rolagem chegou ao final
            if(Math.abs(scrollAt-scrollTot) <= 1){
                    await this.setState({limit: this.state.limit + 10})
                    const api = axios.create({
                        baseURL: `http://localhost:8080/search`,
                    })
                    const resp = await api.get(`${this.props.inputSearch}/${this.state.limit}/10`)
                    /*A API retorna alguns itens com id repetido, essa função filtra e verifica se
                        algum item já estiver na lista e não o retorna no novo array
                    */
                    let array = resp.data.data.filter((item) =>{
                        if(this.props.musics.some(e => e.id === item.id)) return null
                        return item
                    })
                    //adiciona os itens já filtrados a lista
                    this.props.upMusics(this.props.musics.concat(array)) 
            }
        }
        
    }

    //Ao iniciar o webapp trás a lista das músicas mais ouvidas do mundo
    async componentDidMount(){
        if(this.props.mode !== 'search'){
            this.props.idMusics('')
            const api = axios.create({
                baseURL: `http://localhost:8080/getCharts/0/${this.state.limit}`,
            })
            const response = await api.get('')
            this.props.upMusics(response.data.tracks.data)
        }
    }

    //Retorna se é a view home que esta sendo usada
    getView = () => {
        return this.props.typeList === 'home'? true : false
    }

    render(){    
        //Verifica se será mostrado a lista de top musicas, ou favoritos dependendo da página
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


