import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export class Search extends Component {
    state = {
        cityName: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCity(this.state.cityName);
        this.setState({ cityName: "" })
        e.target.reset();

    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} name="cityName" type="text" placeholder="Write a city..."></input>
                    <button >GO!</button>
                </form>
            </React.Fragment>
        )
    }
}

Search.propTypes = {
    addCity: PropTypes.func.isRequired
}

export default Search