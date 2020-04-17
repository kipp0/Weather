import {
  REQUEST_FORECAST,
  REQUEST_FAILED,
  REQUEST_SUCCESS
} from '../actions/types/fetch_forecast'



function requests( state = false, action ) {
  switch (action.type) {
    case REQUEST_FORECAST:
      return true
    case REQUEST_FAILED:
    case REQUEST_SUCCESS:
      return false
    default:
      return state
  }
}

export default requests
