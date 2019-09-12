import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./Result/Result";

//klucz do API
const userId = "d84d2e71e8564b1b598d75e02293d758";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${userId}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("nie udało się");
      })
      .then(response => response.json())
      .then(result => {
        const time = new Date().toLocaleString();

        this.setState(prevState => ({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: result.sys.sunrise,
          sunset: result.sys.sunset,
          temp: result.main.temp,
          pressure: result.main.pressure,
          wind: result.wind.speed
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState(state => ({
          err: true,
          city: this.state.value
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
