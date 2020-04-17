import { combineReducers } from 'redux'

import requests from './requests'
import request_forecast from './request_forecast'
import select_location from './select_location'
import database_request from './database'
import historyTable from './historyTable'

const rootReducer = combineReducers({
  isFetching: requests,
  isPostSuccessful: database_request,
  selected_location: select_location,
  forecasts: request_forecast,
  history: historyTable
})

export default rootReducer
