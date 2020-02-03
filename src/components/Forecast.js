import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Forecast extends Component {
    //location = this.props.city.location;
    //current = this.props.city.current;
    render() {
        const { _id } = this.props.city;
        return (
            <div className="cityItem" onClick={this.props.deleteCity.bind(this, _id)}>
                <h3>{this.props.city.coord.lon}</h3>
                <p>{this.props.city.coord.lon}°C</p>
                <img src={this.props.city.coord.lon} alt={this.props.city.coord.lon} />
            </div>
        )
    }
}

Forecast.propTypes = {
    city: PropTypes.object.isRequired,
    deleteCity: PropTypes.func.isRequired
}

export default Forecast