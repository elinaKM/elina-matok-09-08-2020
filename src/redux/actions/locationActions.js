import { SET_LOCATION } from './../../constants/action-types'

const setLocation = (payload)  => {
    return { 
        type: SET_LOCATION,
        payload
    }
}

export default {
    setLocation
}
