import {combineReducers} from 'redux'
import autoCompleteCities from './autoCompleteCities'
import currentLocation from './currentLocation'

const rootReducer = combineReducers({
    autoCompleteCities,
    currentLocation
    // favorites
})

export default rootReducer