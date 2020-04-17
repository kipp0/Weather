import { SELECT_LOCATION } from '../actions/types/fetch_forecast'


function select_location(state = {}, action) {
  switch (action.type) {
  case SELECT_LOCATION:
    let new_obj = {
      name: action.name,
      coordinates: action.coordinates
    }
    return Object.assign({}, state, new_obj)
  default:
    return state
  }
}

export default select_location
