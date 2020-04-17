import * as databaseActionTypes from '../types/database'


export function get_search_history_success(response) {
	return {
		type: databaseActionTypes.GET_SUCCESS,
		response: response
	}
}
export function get_search_history_failed(response) {
	return {
		type: databaseActionTypes.GET_FAILED,
		response: response
	}
}

export function post_forecasts_success(response) {
	return {
		type: databaseActionTypes.POST_SUCCESS,
		response: response
	}
}
export function post_forecasts_failed(response) {
	return {
		type: databaseActionTypes.POST_FAILED,
		response: response
	}
}

