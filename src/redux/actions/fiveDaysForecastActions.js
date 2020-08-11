import { SET_5DAYS } from './../../constants/action-types'

const setFiveDaysForecast = (payload)  => {
    return { 
        type: SET_5DAYS,
        payload
    }
}

export default {
    setFiveDaysForecast
}
