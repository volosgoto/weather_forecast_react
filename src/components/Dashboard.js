import React, { Component } from "react";
import Location from "./Location";
import { getWeather } from "../actions/weatherActions";
import { setLocation } from "../actions/locationActions";

import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWeather();
    console.log("componentDidMount", this.props.weather);
  }
  render() {
    console.log("render", this.props.weather);
    // console.log("location", this.props);
    let { weather } = this.props;
    if (weather) {
      return (
        <div className="container">
          <div className="row mt-1">
            <div className="col-md-6 m-auto text-center">
              <h1>Weather today</h1>
              <h2>City: Kyiv</h2>
              <p>Temperature: {weather.main.temp} C</p>
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
  { getWeather, setLocation }
)(Dashboard);
