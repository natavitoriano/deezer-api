import React from 'react'
import { StyleButtonFavorite, IconFavoriteBorder, IconFavorite } from "./ButtonFavorite"
import { connect } from 'react-redux'

import { favoritesMusics } from '../../store/actions/actionMusics'


const ButtonFavorite = props => {
    
    async function clickFavorite(music){
        //Verifica se a música já foi adicionada aos favoritos e não há retorna se já tenha sido
        if(props.favorites.some(e => e.id === music.id)) return
        await props.fvMusics(props.favorites.concat(music))
    }

    //Retorna um novo array de músicas sem o item removido
    async function  removeFavorite(music){
        let favorites = props.favorites
        favorites = favorites.filter((item) =>{
            if(item.id !== music.id) return item
            return null
        })
        await props.fvMusics(favorites)   
    }
 
    return (
        <StyleButtonFavorite dp={props.typeList} onClick={e => 
            props.typeList === 'home'? clickFavorite(props.musicItem):removeFavorite(props.musicItem)}>
                <IconFavoriteBorder dp={props.typeList}/>
                <IconFavorite dp={props.typeList}/>
        </StyleButtonFavorite>
    )
}

function mapStateToProps(state) {
     return {
         favorites: state.reducerMusics.favorites,
     }
 }
 
 function mapDispatchToProp(dispatch) {
     return{
         fvMusics(newMusics){
             const action = favoritesMusics(newMusics)
             dispatch(action)
         },
     }
 }

export default connect(mapStateToProps, mapDispatchToProp)(ButtonFavorite)
