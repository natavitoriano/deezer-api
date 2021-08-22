import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { CustomInput, ButtonSearch, ContainerSearch } from './InputSearch'
import { updateMusics, idMusicPlay, modeMusic, inputSearch } from '../../store/actions/actionMusics'

class InputSearch extends Component {
    state = {
        input_value: '',
        index: 0,
    }

    async componentDidMount(){
        this.setState({input_value: ''})
    }

    async searchMusic(){
        if(this.state.input_value !== ''){
            const api = axios.create({
                baseURL: 'http://localhost:8080/search',
            })
            const response = await api.get(`${this.state.input_value}/${this.state.index}/10`)
            this.props.inputMusic(this.state.input_value)
            this.setState({input_value: ''})
            this.props.upMusics(response.data.data)
            this.props.idMusics('')
            this.props.moMusic('search')  
        }
    }
    render(){
        return(
            <ContainerSearch>
                <CustomInput value={this.state.input_value} type="text" placeholder="Pesquisar"
                    onChange={ e => this.setState({input_value: e.target.value})} visible={this.props.mode}/>
                <ButtonSearch onClick={e =>  this.searchMusic()} visible={this.props.mode}>Pesquisar</ButtonSearch>
            </ContainerSearch>
        )
    }
}

function mapStateToProps(state) {
     return {
         musics: state.reducerMusics.musics,
         idMusicPlay: state.reducerMusics.musics,
         mode: state.reducerMusics.mode,
         inputSearch: state.reducerMusics.inputSearch
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
         moMusic(mode){
            const action = modeMusic(mode)
            dispatch(action)
         },
         inputMusic(value){
            const action = inputSearch(value)
            dispatch(action)
         },

     }
}

export default connect(mapStateToProps, mapDispatchToProp)(InputSearch)