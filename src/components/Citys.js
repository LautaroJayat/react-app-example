import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Forecast from './Forecast'

export class Citys extends Component {
    render() {
        return this.props.city.map(city => (
            <Forecast key={city._id} city={city} deleteCity={this.props.deleteCity} />
        ))
    }
}
Citys.propTypes = {
    city: PropTypes.array.isRequired,
    deleteCity: PropTypes.func.isRequired
}
export default Citys
