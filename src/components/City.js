import React, { Component } from "react";
import { getCity } from "../actions/locationActions";

import { connect } from "react-redux";

class City extends Component {
  render() {
    let [city] = this.props.location.cities;

    if (city) {
      return (
        <div className="row mt-5">
          <div className="col-md-6 m-auto text-center">
            <h1>Weather today</h1>
            <h2>{city.name}</h2>
            {/* <img
              src={`http://openweathermap.org/img/w/${
                weather.weather[0].icon
              }.png`}
              alt="weather_icon"
            /> */}
            <h3>{city.main.temp}</h3>

            <p>Day: {city.main.temp_max} </p>
            <p>Night: {city.main.temp_min}</p>

            <p>Pressure {city.main.pressure}</p>
            <p>Wind {city.wind.deg} meter/sec</p>

            <div className="col mt-1">
              <button className="btn btn-primary ml-1">5 days forecast</button>
              <button className="btn btn-primary ml-1">10 days forecast</button>
            </div>
          </div>
        </div>
      );
    } else {
      return false;
    }
  }
}

const mapStateToProps = state => ({
  location: state.location
});

export default connect(
  mapStateToProps,
  { getCity }
)(City);
