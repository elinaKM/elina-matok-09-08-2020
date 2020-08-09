import { SET_CITIES } from './../../constants/action-types'

const setAutoComplete = (payload)  => {
    return { 
        type: SET_CITIES,
        payload
    }
}

export default {
    setAutoComplete
}
