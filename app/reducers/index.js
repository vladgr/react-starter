import {combineReducers} from 'redux'
import todosState from './todos';
import {routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    todosState,
    routing: routerReducer
})

export default rootReducer