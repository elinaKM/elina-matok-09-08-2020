import { ADD_TO_FAVORITES } from './../../constants/action-types'
import { REMOVE_FROM_FAVORITES } from './../../constants/action-types'

const favorites = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [
        ...state,
        action.payload
      ]
    case REMOVE_FROM_FAVORITES:
      return state.filter((item) => item.key !== action.payload);
    default: 
      return state;
  }
}

export default favorites