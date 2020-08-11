import { SET_CURRENT_WEATHER } from '../../constants/action-types'

const currentWeather = (state = {}, action) => {
  switch (action.type) {
        case SET_CURRENT_WEATHER:
          state = action.payload;
          return state;
        default:
          return state;
      }
}

export default currentWeather