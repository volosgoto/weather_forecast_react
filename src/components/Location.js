import React, { Component } from "react";
import { setLocation } from "../actions/locationActions";
import pressureConverter from "../helpers/pressureConverter";
import tempConverter from "../helpers/tempConverter";

import { connect } from "react-redux";

class Location extends Component {
  setLocationFromInput = () => {
    this.props.setLocation(this.locationInput.value);
    console.log(this.locationInput.value);
    return (this.locationInput.value = "");
  };

  render() {
    let cities = this.props.location.cities;
    console.log("cities", cities);
    return (
      <div>
        <div className="row">
          <div className="col-md-6 m-auto text-center">
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
              className="btn btn-success"
              onClick={this.setLocationFromInput}
            >
              Change Location
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">Recent Places</div>
        </div>
        <div className="row mt-5">
          {/* {console.log("cities", cities)} */}
          {cities.map(city => {
            return (
              <div className="col text-left" key={city.id++}>
                <img
                  src={`http://openweathermap.org/img/w/${
                    city.weather[0].icon
                  }.png`}
                  alt="weather_icon"
                />
                <p>{city.weather[0].description} </p>
                <h2>{city.name}</h2>
                <p>Temp {tempConverter(city.main.temp)}</p>
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
