import { combineReducers } from 'redux'
import userinfoReducer from './userinfoReducer'
import collect from './collect'

export default combineReducers({
    userinfoReducer,
    collect
})