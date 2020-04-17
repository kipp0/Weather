
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import HistoryItem from "./HistoryItem";
import * as databaseActions from "../actions/databaseActions";

class History extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		history: PropTypes.array.isRequired,
	}

	constructor(props) {
		super(props);
		const { dispatch } = props

		dispatch( databaseActions.getSearchHistory() )
	}

	componentWillMount() {
		
	}

	render() {
		const { dispatch } = this.props
		const remove_forecast = bindActionCreators(databaseActions.deleteSearchResult, dispatch)

		const historyItems = this.props.history.map((location, idx) => {
			return (
				<HistoryItem
					key={location._id}
					idx={idx}
					location={location}
					remove={remove_forecast}
				/>
			)
		})

		return (
			<table className="table table-dark geosuggest">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Selected Location</th>
						<th scope="col">Temperature</th>
						<th scope="col">Last Updated</th>
					</tr>
				</thead>
				<tbody>
					{historyItems}
				</tbody>
			</table>
		);
	}
}





const mapStateToProps = (state) => {

	const { history } = state
	// console.log(state)
	const response = history || []
	
	return {
		history: response
	}
}

export default connect(mapStateToProps)(History);