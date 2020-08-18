import { SET_CURRENT_WEATHER } from '../../constants/action-types'
import { getCurrentConditions } from './../../utils/apiCalls'
import { getCurrentConditionsValues } from './../../utils/customization'

const setCurrentWeather = (locationKey)  => {
    return (dispatch) => {
        getCurrentConditions(locationKey)
        .then((res) => getCurrentConditionsValues(res[0]))
        .then((conditionsValues) => {
            dispatch({
                type: SET_CURRENT_WEATHER,
                payload: conditionsValues
            })
        })
    }
}

export default {
    setCurrentWeather
}
