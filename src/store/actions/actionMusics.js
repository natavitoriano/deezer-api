import {
    UPDATE_TOP_MUSICS, 
    FAVORITES_MUSICS, 
    ID_MUSIC_PLAY, 
    LIST_MODE, 
    INPUT_SEARCH, 
    URL_MUSIC_PLAY} from './actionTypes'

export function updateMusics(newMusics) {
    return {
        type: UPDATE_TOP_MUSICS,
        payload: newMusics
    }
}

export function favoritesMusics(music) {
    return {
        type: FAVORITES_MUSICS,
        payload: music
    }
}

export function idMusicPlay(id) {
    return {
        type: ID_MUSIC_PLAY,
        payload: id
    }
}

export function modeMusic(mode) {
    return {
        type: LIST_MODE,
        payload: mode
    }
}

export function inputSearch(value) {
    return {
        type: INPUT_SEARCH,
        payload: value
    }
}

export function urlMusicPlay(url) {
    return {
        type: URL_MUSIC_PLAY,
        payload: url
    }
}


