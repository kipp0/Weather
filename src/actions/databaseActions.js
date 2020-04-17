import * as databaseActionCreators from "../actions/creators/database";
import * as historyTableActionCreators from '../actions/creators/historyTable'
import $ from 'jquery'

export const getSearchHistory = () =>  dispatch => {
	const url = "http://localhost:54682/locations"
	
	$.get(url, (res) => {
		dispatch(databaseActionCreators.get_search_history_success(res))
	})
		.fail((err) => {
			dispatch(databaseActionCreators.get_search_history_failed(err))
		})
}



export const postSearchResult = ({name, temperature, lastUpdated}) => dispatch => {

	const url = "http://localhost:54682/locations"
	console.log(lastUpdated)
	const data = {
		name,
		temperature,
		lastUpdated
	}

	$.post(url, data)
		.done((res) => dispatch(databaseActionCreators.post_forecasts_success(res)))
		.fail((err) => dispatch(databaseActionCreators.post_forecasts_failed(err)))
}

export const deleteSearchResult = (idx, lastUpdated) => dispatch => {
	const url = "http://localhost:54682/locations"
	const config = {
		url,
		type: 'DELETE',
		data: { lastUpdated: lastUpdated }
	}
	
	dispatch(historyTableActionCreators.remove_forecast(idx))
	
	$.ajax(url,config)
	.done((res) => {
			dispatch( databaseActionCreators.post_forecasts_success(res) )
		})
		.fail((err) => dispatch(databaseActionCreators.post_forecasts_failed(err)))
}