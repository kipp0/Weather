import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Forecast from './Forecast'

const Results = ({ isFetching, response, lastUpdated, selected_location }) => {
  return (
    <div>
      <p>
        { lastUpdated &&
          <span>
            Last updated: { new Date(lastUpdated).toLocaleTimeString() }
          </span>
        }
      </p>

      { !isFetching && response.error &&
        <h2>Could Not Get Results for the location { selected_location.name }</h2>
      }
      { isFetching &&
        <h2>Loading...</h2>
      }
      { lastUpdated &&
        <div style={ { opacity: isFetching ? 0.5 : 1 } }>
          <Forecast forecast={ response } />
        </div>
      }
    </div>
  )
}

Results.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  selected_location: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  lastUpdated: PropTypes.number,
}

const mapStateToProps = (state) => {

  const { selected_location, forecasts, isFetching } = state
  // deconstruct the forecasts object into lastUpdated and forecast
  // or give them a default values if there undefined

  // it doesn't return display the info cause
  // the selected_location.name != any keys in forecasts
  // must make sure that the same data is always equal the same
  const {
    lastUpdated,
    response
  } = forecasts[selected_location.name] ||
  {
    response: {},
    selected_location: {},
  }

  return {
    isFetching,
    selected_location,
    response,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Results)
