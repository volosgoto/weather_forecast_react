import React, { Component } from "react";
import { setLocation } from "../actions/locationActions";
import pressureConverter from "../helpers/pressureConverter";
import tempConverter from "../helpers/tempConverter";

import { connect } from "react-redux";

class Location extends Component {
  setLocationFromInput = () => {
    this.props.setLocation(this.locationInput.value);
    return (this.locationInput.value = "");
  };

  render() {
    let cities = this.props.location.cities;
    console.log('Location', this.props);
    return (
      <div>
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <p className="mt-5">Enter City</p>
            <input
              ref={input => {
                this.locationInput = input;
              }}
              type="text"
              className="inputLocation placeholder"
              name=""
              id=""
              placeholder=""
            />
            <button
              className="btn btn-light"
              onClick={this.setLocationFromInput}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
        <div className="row mt-5">
          {this.props.location.cities.length > 0 ? (
            <div className="col text-center">
              <h3>Recent Places</h3>
            </div>
          ) : null}
        </div>
        <div className="row mt-5">
          {cities.map(city => {
            return (
              <div className="col text-left" key={city.id++}>
                <img
                  src={`http://openweathermap.org/img/w/${
                    city.weather[0].icon
                    }.png`}
                  alt="weather_icon"
                />
                {<p>{city.weather[0].description} </p>}
                <h2>{city.name}</h2>
                {<p>Temp {tempConverter(city.main.temp)}</p>}
                <p>Pressure {pressureConverter(city.main.pressure)} mmHg</p>
                <p>Wind {city.wind.speed} meter/sec</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location
});

export default connect(
  mapStateToProps,
  { setLocation }
)(Location);
