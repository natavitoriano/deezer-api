import React from 'react'

import MusicList from '../components/layout/MusicList.jsx'

import { Container } from './Home'
import { TitlePages } from '../assets/style/style'


const Favorites = props => (
    <Container>
        <TitlePages>Suas músicas favoritas</TitlePages>
        <MusicList typeList='favorites'/>
    </Container>
)

export default Favorites