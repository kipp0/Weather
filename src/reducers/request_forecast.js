import {
  REQUEST_FAILED,
  REQUEST_SUCCESS
} from '../actions/types/fetch_forecast'


function request_forecast( state = {}, action ) {
  switch (action.type) {

    case REQUEST_FAILED:

      let state_on_request_failed = {
          response: action.response
      }

      return Object.assign({}, state, state_on_request_failed)



    case REQUEST_SUCCESS:

      let state_on_request_success = {
        [`${action.location.name}`]:{
          response: action.response,
          lastUpdated: action.receivedAt
        }
      }
      
      

      return Object.assign({}, state, state_on_request_success)

    default:
      return state
  }

}


export default request_forecast
