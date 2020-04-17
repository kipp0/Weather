import * as databaseActions from '../actions/types/database'


function database_request( state = {}, action ) {
  switch (action.type) {

    case databaseActions.POST_FAILED:
      return action.response

    case databaseActions.POST_SUCCESS:
      return action.response
    default:
      return state
  }

}


export default database_request
