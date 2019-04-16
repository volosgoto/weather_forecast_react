import React, { Component } from "react";
import Location from "./Location";
import { getWeather } from "../actions/weatherActions";
import { setLocation } from "../actions/locationActions";

import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWeather();
    // this.props.setLocation('kyiv');
  }
  render() {
    console.log("Dashboard render", this.props.weather);
    let { weather } = this.props;
    if (weather) {
      return (
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 m-auto text-center">
              {/* <h1>Weather today</h1> */}
              <h2>{weather.name}</h2>
              <img
                src={`http://openweathermap.org/img/w/${
                  weather.weather[0].icon
                  }.png`}
                alt="weather_icon"
              />
              <h3>{weather.main.temp}</h3>

              <p>Day: {weather.main.temp_max} </p>
              <p>Night: {weather.main.temp_min}</p>

              <p>Pressure {weather.main.pressure}</p>
              <p>Wind {weather.wind.deg} meter/sec</p>

              <div className="col mt-1">
                <button className="btn btn-primary ml-1">
                  5 days forecast
                </button>
                <button className="btn btn-primary ml-1">
                  10 days forecast
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Location weather={weather} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col text-center mt-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  weather: state.weather.weather
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Dashboard);
