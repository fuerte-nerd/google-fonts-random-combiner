import { combineReducers } from 'redux'
import uI from './uIReducer';
import data from './dataReducer'

export default combineReducers({
    uI,
    data
})