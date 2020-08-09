import { SET_CITIES } from '../../constants/action-types'

const autoCompleteCities = (state = ["Tel-Aviv", "Haifa"], action) => {
  switch (action.type) {
        case SET_CITIES:
          state = action.payload;
          return state;
        default:
          return state;
      }
}

export default autoCompleteCities