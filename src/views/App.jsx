import './App.js'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Container } from './App.js'
import Content from '../components/layout/Content.jsx'
import Header from '../components/layout/Header.jsx'

const App = props => (
    <Container>
        <Router>
            <Header />
            <Content />
        </Router>
    </Container>  
)

export default App