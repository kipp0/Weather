import React from 'react'
import PropTypes from 'prop-types'


const HistoryItem = ({ idx, location, remove }) => {
	return (
		<tr key={idx}>
			<th scope="row">{idx+1}</th>
			<td>{location.name}</td>
			<td>{location.temperature}</td>
			<td>{location.lastUpdated}</td>
			<td><button onClick={() => remove(idx, location.lastUpdated)}><i className="far fa-window-close" ></i></button></td>
		</tr>
	)
}

HistoryItem.propTypes = {
	idx: PropTypes.number.isRequired,
	location: PropTypes.object.isRequired,
	remove: PropTypes.func.isRequired,
}

export default HistoryItem;
