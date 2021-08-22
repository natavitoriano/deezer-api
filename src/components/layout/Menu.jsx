import './Menu.js'
import React, { Component } from 'react'
import {connect} from 'react-redux'

import { NavMenu, ListMenu, MenuItem, HomeLink, FavoriteLink } from './Menu.js'
import { modeMusic } from '../../store/actions/actionMusics'

class Menu extends Component {
    state = {
        selected: ''
    }
    async selectMenu(e){
        if(e === 'Início' && this.state.selected !== 'home'){
            this.setState({selected:'home'})
            await this.props.moMusic('')
        }else if(e === 'Favoritas' && this.state.selected !== 'favorite'){
            this.setState({selected:'favorite'})
            await this.props.moMusic('favorite')
        }
    }
    componentDidMount(){
        const splitHref = window.location.href.split('/')
        if(splitHref[3] === 'favorite'){
            this.setState({selected:'favorite'})
        }else{
            this.setState({selected:'home'})
        }
    }
    render(){
        return(
            <NavMenu>
                <ListMenu>
                    <MenuItem>
                        <HomeLink selected={this.state.selected} onClick={e=>this.selectMenu(e.target.text)} to="/">Início</HomeLink>
                    </MenuItem>
                    <MenuItem>
                        <FavoriteLink selected={this.state.selected} onClick={e=>this.selectMenu(e.target.text)} to="/favoritas">Favoritas</FavoriteLink>
                    </MenuItem>
                </ListMenu>
            </NavMenu>  
        )
    }
            
}

function mapStateToProps(state) {
    return {
        mode: state.reducerMusics.mode,
    }
}

function mapDispatchToProp(dispatch) {
    return{
        moMusic(mode){
            const action = modeMusic(mode)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Menu)