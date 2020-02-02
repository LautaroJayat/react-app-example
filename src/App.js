import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Citys from './components/Citys'
import uuid from 'uuid'
import './App.css'

export class App extends Component {
  state = {
    city: []
  }
  addCity = (cityName) => {
    console.log(cityName);
    fetch(`http://api.weatherstack.com/current?access_key=b44bfa51b8f0d4a1adbf0d1111fe89a3&query=${cityName}`)
      .then(res => res.json())
      .then(newCity => {
        if (newCity.location) {
          newCity.id = uuid.v4();
          this.setState({ city: [...this.state.city, newCity] });
          console.log(this.state.city);
        } else {
          console.log(newCity);
          console.log('Woops, no query pal!');
        }
      });
  }

  deleteCity = (id) => {
    this.setState({
      city: [...this.state.city.filter(city => { return city.id !== id })]
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search addCity={this.addCity} />
        <Citys city={this.state.city} deleteCity={this.deleteCity} />

      </div>

    )
  }
}


export default App;
