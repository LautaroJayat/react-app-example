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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=df4c1079550f4c8d5d8f14a31aacf223`)
      .then(res => res.json())
      .then(newCity => {
        if (newCity.coord) {
          newCity._id = uuid.v4();
          this.setState({ city: [...this.state.city, newCity] });
          console.log(this.state.city);
        } else {
          console.log(newCity);
          console.log('Woops, no query pal!');
        }
      });
  }

  deleteCity = (_id) => {
    this.setState({
      city: [...this.state.city.filter(city => { return city._id !== _id })]
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
