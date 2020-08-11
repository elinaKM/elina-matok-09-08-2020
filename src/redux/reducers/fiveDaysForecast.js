import { SET_5DAYS } from '../../constants/action-types'

const fiveDaysForecast = (state = [], action) => {
  switch (action.type) {
        case SET_5DAYS:
          state = action.payload;
          return state;
        default:
          return state;
      }
}

export default fiveDaysForecast