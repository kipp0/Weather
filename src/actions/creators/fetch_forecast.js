import * as fetchForecastActions from '../types/fetch_forecast'


export function select_location(name, coordinates) {
  return {
    type: fetchForecastActions.SELECT_LOCATION,
    name,
    coordinates
  }
}

export function request_forecast(location) {
  return {
    type: fetchForecastActions.REQUEST_FORECAST,
    location
  }
}

export function request_failed(location, response) {
  return {
    type: fetchForecastActions.REQUEST_FAILED,
    location,
    response: response
  }
}

export function request_success(location, response) {
  return {
    type: fetchForecastActions.REQUEST_SUCCESS,
    location,
    response: response,
    receivedAt: Date.now()
  }
}


