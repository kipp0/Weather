import * as historyTableActionTypes from '../actions/types/historyTable';
import * as databaseActionTypes from '../actions/types/database'
let key = 0

function historyTable( state = [], action ) {

  let history
  switch (action.type) {

    case historyTableActionTypes.ADD_FORECAST_SEARCH:
      history = state || []

      const forecast = [{
        _id: key+=1,
        name: action.name,
        temperature: action.temperature,
        lastUpdated: action.lastUpdated
      }]

      
      return [...history, ...forecast]

    case historyTableActionTypes.REMOVE_FORECAST_SEARCH:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      
    case historyTableActionTypes.UPDATE_FORECAST_SEARCH:
    case databaseActionTypes.GET_FAILED:
      return [action.response]

    case databaseActionTypes.GET_SUCCESS:
      history = state || []

      return [...history, ...action.response]
    default:
      return state
  }

}


export default historyTable
