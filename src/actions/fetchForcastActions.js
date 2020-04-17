// import { postSearchResult } from '../actions/databaseActions'
import * as fetchForecastActionCreators from "../actions/creators/fetch_forecast";
import * as historyTableActionCreators from '../actions/creators/historyTable';
import * as databaseActions from '../actions/databaseActions';
import axios from 'axios'

const FORECAST_API_KEY = 'd0454418a440c7bac837ee42b7e80e0a'
const FORECAST_URL = `https://api.darksky.net/forecast/${FORECAST_API_KEY}/`

export const fetch_forecast_if_needed = location => (dispatch, getState) => {
	if (should_fetch_forecast(getState(), location)) {
		return dispatch(fetch_forecast(location))
	}
}



function should_fetch_forecast(state, location) {
	const did_fetch_already = state.forecasts[location.name]
	const lastUpdated = state.forecasts[location.name] ?
		state.forecasts[location.name].lastUpdated : undefined
	const time_passed = calc_time_passed(lastUpdated)

	if (!did_fetch_already) {
		return true
	} else if (time_passed > 60) {
		return true
	} else {
		return false
	}

}

const calc_time_passed = lastUpdated => {

	const now = Date.now()
	let diff

	lastUpdated = lastUpdated ? lastUpdated : now

	diff = now - lastUpdated
	diff /= 1000

	return Math.floor(diff)
}

const fetch_forecast = location => dispatch => {

	const URL = `${FORECAST_URL}${location.coordinates.lat},${location.coordinates.lng}?units=auto`

	dispatch(fetchForecastActionCreators.request_forecast(location))

	return axios.get(URL)
		.then(response => {
			const locationData = {
				name: location.name,
				temperature: response.data.currently.temperature,
				lastUpdated: Date.now()
			}
			dispatch(fetchForecastActionCreators.request_success(location, response.data))
			dispatch(historyTableActionCreators.add_forecast(locationData))
			dispatch(databaseActions.postSearchResult(locationData) )
		})
		.catch(err => {
			dispatch(fetchForecastActionCreators.request_failed(location, err))
			console.log('Error fetching and parsing data', err);
		})
}
