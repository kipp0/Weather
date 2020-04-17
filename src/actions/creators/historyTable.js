import * as historyTableActionTypes from "../types/historyTable";

export const add_forecast = ({name, temperature, lastUpdated}) => {

	return {
		type: historyTableActionTypes.ADD_FORECAST_SEARCH,
		name,
		temperature,
		lastUpdated
	}
}

export const remove_forecast = index => {

	return {
		type: historyTableActionTypes.REMOVE_FORECAST_SEARCH,
		index
	}
}

export const update_forecast = (index, forecast) => {

	return {
		type: historyTableActionTypes.UPDATE_FORECAST_SEARCH,
		index,
		forecast
	}
}