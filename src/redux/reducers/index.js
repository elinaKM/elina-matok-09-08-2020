import {combineReducers} from 'redux'
import autoCompleteCities from './autoCompleteCities'
import currentLocation from './currentLocation'
import fiveDaysForecast from './fiveDaysForecast'
import currentWeather from './currentWeather'

const rootReducer = combineReducers({
    autoCompleteCities,
    currentLocation,
    fiveDaysForecast,
    currentWeather
    // favorites
})

export default rootReducer