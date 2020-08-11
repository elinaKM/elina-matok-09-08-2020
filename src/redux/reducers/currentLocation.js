import { SET_LOCATION } from '../../constants/action-types'

const currentLocation = (state = {key: "215854", name: "Tel Aviv"}, action) => {
  switch (action.type) {
        case SET_LOCATION:
          state = action.payload;
          return state;
        default:
          return state;
      }
}

export default currentLocation