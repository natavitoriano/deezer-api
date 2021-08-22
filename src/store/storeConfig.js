import { createStore, combineReducers } from 'redux'

import reducerMusics from './reducers/reducerMusic'

const reducers = combineReducers({
    reducerMusics: reducerMusics,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig