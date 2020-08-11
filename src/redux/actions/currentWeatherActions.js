import { SET_CURRENT_WEATHER } from '../../constants/action-types'

const setCurrentWeather = (payload)  => {
    return { 
        type: SET_CURRENT_WEATHER,
        payload
    }
}

export default {
    setCurrentWeather
}
