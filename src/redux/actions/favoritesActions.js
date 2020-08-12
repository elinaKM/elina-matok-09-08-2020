import { ADD_TO_FAVORITES } from './../../constants/action-types'
import { REMOVE_FROM_FAVORITES } from './../../constants/action-types'

const add = (payload) => {
    return { 
        type: ADD_TO_FAVORITES,
        payload
    }
}

const remove = (payload) => {
    return { 
        type: REMOVE_FROM_FAVORITES,
        payload
    }
}

export default {
    add,
    remove
}