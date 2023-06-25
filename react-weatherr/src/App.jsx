import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Weather from "./app_component/weather.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';


const API_key = '21a6f4d3214f554dd74d21a33c94456a';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };
    this.getWeather();
  }

  calCelsius(temp){
    let cell = Math.floor(temp-273.15);
    return cell;
  }

  getWeather = async () => {
    const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city},$(country}&appid={API_key}');

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.clCelsius(response.main.temp_max),
      temp_min: this.clCelsius(response.main.temp_min),
      description: response.weather[0].description
    });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0],id)
  };

  render() {
    return (
      <div className='card'>
        <Header />
        <Body />
        <Buttons />
        <Cards />
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_celsius={this.state.celsius} 
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />

      </div>
    )
  }
}

export default App


