import { 
    UPDATE_TOP_MUSICS, 
    FAVORITES_MUSICS,
    ID_MUSIC_PLAY,
    INPUT_SEARCH,
    LIST_MODE,
    URL_MUSIC_PLAY } from '../actions/actionTypes'

const initialState = {
    musics: [],
    favorites: [],
    musicPlay: 'Play',
    idMusicPlay: '',
    mode: '',
    inputSearch: '',
    urlMusicPlay: '',
}

function Musics(state = initialState, action) {
    switch(action.type) {
        case UPDATE_TOP_MUSICS:
            return {
                ...state,
                musics: action.payload
            }
        case FAVORITES_MUSICS:
            return {
                ...state,
                favorites: action.payload
            }
        case ID_MUSIC_PLAY:
            return {
                ...state,
                idMusicPlay: action.payload
            }
        case LIST_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case INPUT_SEARCH:
            return {
                ...state,
                inputSearch: action.payload
            }
        case URL_MUSIC_PLAY:
            return {
                ...state,
                urlMusicPlay: action.payload
            }    
        default:
            return state
    }
}

export default Musics