/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest';

import * as fetchForcastActions from '../actions/fetchForcastActions'
import * as fetchForcastActionCreators from '../actions/creators/fetch_forecast'


if ( !String.prototype.trimsubstr ) {
  String.prototype.trimsubstr = function (starting_str, arg) {

    let index = this.indexOf(starting_str)
    if (index === -1) {
      return this
    }

    if (arg === undefined || arg === 0) {
      return this.slice(0, index)
    } else if (arg > 0 || arg < 0) {
      return this.slice(arg, index)
    }

  }
}


class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    selected_location: PropTypes.object,

  }

  constructor(props) {
    super(props)
    this.handleSelectedLocation = this.handleSelectedLocation.bind(this)
  }

  componentWillMount() {

    // to get location of user to auto display weather.
    // doesn't work on localhost
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition( this.handleNavigator );
    // }
  }
  handleNavigator(position) {
    return {lat:position.coords.latitude,lng:position.coords.longitude}
  }

  componentWillReceiveProps(next_props) {
    if (next_props.selected_location !== this.props.selected_location) {
      const { dispatch, selected_location } = next_props
      dispatch( fetchForcastActions.fetch_forecast_if_needed(selected_location) )
    }

  }

  parseSelectedLocation(selected) {
    let array_length = selected.gmaps.address_components.length
    let name = selected.gmaps.address_components[0].long_name
    let country = selected.gmaps.address_components[array_length - 1].long_name
    // console.log(selected)
    return `${name.trimsubstr(',')},${country}`
    // return selected.description
    
  }
  
  handleSelectedLocation(selected) {
    const { dispatch } = this.props
    let selected_location = this.parseSelectedLocation(selected)
    // dispatch( fetchForcastActionCreators.select_location(selected_location, selected_location))
    dispatch(fetchForcastActionCreators.select_location(selected_location, selected.location))
  }

  render() {
    return (
      <Geosuggest placeholder="Search"
                  onSuggestSelect={this.handleSelectedLocation} />
    )
  }
}


const mapStateToProps = (state) => ({
  selected_location: state.selected_location
})

export default connect(mapStateToProps)(Search)
