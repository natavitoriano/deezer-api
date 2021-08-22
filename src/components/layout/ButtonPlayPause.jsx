import React from 'react'
import { connect } from 'react-redux'
import { AiFillPlayCircle } from 'react-icons/ai'
import { idMusicPlay, urlMusicPlay } from '../../store/actions/actionMusics'

import { PlayPause, IconPause } from './ButtonPlayPause.js'

const AudioPlayer = props => {
    async function clickPlay(url,id){    
        await props.urlMusic(url)
        const aud = document.getElementById('player-audio')
        const btnPlay =  document.getElementById('play'+id)
        if(props.idMusicPlay && props.idMusicPlay !== id){
            document.getElementById('play'+props.idMusicPlay).style.display = 'block'
            document.getElementById('pause'+props.idMusicPlay).style.display = 'none'
            aud.pause()
        }
        if(btnPlay.style.display === 'block' || btnPlay.style.display === ''){
            await aud.play()
            btnPlay.style.display = 'none'
            document.getElementById('pause'+id).style.display = 'block'
        }else{
            btnPlay.style.display = 'block'
            document.getElementById('pause'+id).style.display = 'none'
            aud.pause()
        }
            
        aud.addEventListener('ended', (e) => {
            e.target.pause()
            document.getElementById('play'+id).style.display = 'block'
            document.getElementById('pause'+id).style.display = 'none'
        });
        await props.idMusics(id)
    }

    return (
            <PlayPause id={'player'+props.musicId}  onClick={e => clickPlay(props.musicPreview,props.musicId)}> 
                <AiFillPlayCircle id={'play'+props.musicId}/>
                <IconPause id={'pause'+props.musicId} /> 
            </PlayPause>)
}

function mapStateToProps(state) {
    return {
        idMusicPlay: state.reducerMusics.idMusicPlay,
        urlMusicPlay: state.reducerMusics.urlMusicPlay,
    }
}

function mapDispatchToProp(dispatch) {
    return{
        idMusics(id){
            const action = idMusicPlay(id)
            dispatch(action)
        },
        urlMusic(url){
            const action = urlMusicPlay(url)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(AudioPlayer)