import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/Home.jsx'
import Favorites from '../../views/Favorites.jsx'

const Content = props => (
    <main>
        <Switch>
            <Route path="/favoritas">
                <Favorites />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)

export default Content