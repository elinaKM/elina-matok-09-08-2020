import {combineReducers} from 'redux'
import currentLocation from './currentLocation'
import fiveDaysForecast from './fiveDaysForecast'
import currentWeather from './currentWeather'
import favorites from './favorites'

const rootReducer = combineReducers({
    currentLocation,
    fiveDaysForecast,
    currentWeather,
    favorites
})

export default rootReducer