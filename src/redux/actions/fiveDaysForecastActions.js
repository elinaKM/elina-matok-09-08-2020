import { SET_5DAYS } from './../../constants/action-types'
import { get5DaysWeather } from './../../utils/apiCalls'
import { get5ForecastValues } from './../../utils/customization'

const setFiveDaysForecast = (locationKey)  => {
    return (dispatch) => {
        get5DaysWeather(locationKey)
        .then((res) => get5ForecastValues(res.DailyForecasts))
        .then((fiveDaysValues) => {
            dispatch({
                type: SET_5DAYS,
                payload: fiveDaysValues
            })
        })
    }
}

export default {
    setFiveDaysForecast
}
