import React from 'react'
import MusicList from '../components/layout/MusicList.jsx'
import TitlePage from '../components/layout/TitlePage.jsx'

import { Container } from './Home'


const Home = props => {
    return (
        <Container> 
            <TitlePage />
            <MusicList typeList='home'/>
        </Container>
    )
}
    
export default Home