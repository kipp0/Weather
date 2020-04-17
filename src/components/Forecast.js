import React from 'react'
import PropTypes from 'prop-types'


const Forecast = ({ forecast }) => {

  return (
    <div>
      {/* <div> <img src={forecast.current.weather_icons} alt={forecast.current.weather_descriptions}/> </div> */}
      <h1>
        <strong>{ forecast.currently.temperature }˚</strong>
      </h1>
    </div>
  )
}


Forecast.propTypes = {
  forecast: PropTypes.object.isRequired
}

export default Forecast
