import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Forecast extends Component {
    location = this.props.city.location;
    current = this.props.city.current;
    render() {
        const { id } = this.props.city;
        return (
            <div className="cityItem" onClick={this.props.deleteCity.bind(this, id)}>
                <h3>{this.location.name}</h3>
                <p>{this.current.temperature}°C</p>
                <img src={this.current.weather_icons[0]} alt={this.current.weather_descriptions[0]} />
            </div>
        )
    }
}

Forecast.propTypes = {
    city: PropTypes.object.isRequired,
    deleteCity: PropTypes.func.isRequired
}

export default Forecast