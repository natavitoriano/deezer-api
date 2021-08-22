import React from 'react'
import { connect } from 'react-redux'

import { TitlePages } from '../../assets/style/style.js'

//Esse componente controla qual mensagem será exibida para o usuário se estiver no inicio ou em pesquisas
const TitlePage = props => {
    return(
        <TitlePages>{props.mode === 'search'? `Você pesquisou por: ${props.inputSearch}`:"Top músicas mais ouvidas" }</TitlePages>
    )
}

function mapStateToProps(state) {
    return {
        mode: state.reducerMusics.mode,
        inputSearch: state.reducerMusics.inputSearch,
    }
}

export default connect(mapStateToProps)(TitlePage)