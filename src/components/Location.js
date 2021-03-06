import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  setLocation,
  getCity,
  disableCityInput
} from "../actions/locationActions";
import tempConverter from "../helpers/tempConverter";
import Alert from "./Alert";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Location extends Component {
  setLocationFromInput = () => {
    this.props.setLocation(this.locationInput.value);
    this.locationInput.value = ""
    if (this.props.location.cities.length === 4) {
      this.props.disableCityInput();
    }
    if ((this.props.location.cities.length === 4) || (this.props.location.disableInput === true)) {
      let elementInput = ReactDOM.findDOMNode(this.locationInput);
      return elementInput.disabled = true;
    }

  };


  render() {
    let cities = this.props.location.cities;
    let disableInput = this.props.location.disableInput;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <p className="mt-5">Enter City</p>
            {/* Alert */}
            <div className="row">
              <div className="col">{disableInput && <Alert />}</div>
            </div>
            {/* Alert */}
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
              <h4>Recent Places</h4>
            </div>
          ) : null}
        </div>
        <div className="container">
          <div className="row mt-3 justify-content-center">
            {cities.map(city => {
              this.getCityInfo = () => {
                this.props.getCity(city.city.name);
              };
              return (
                <Link
                  key={city.city.name}
                  to={`/about/${city.city.name}`}
                  onClick={this.getCityInfo}
                  className="btn btn-info m-auto mb-2"
                >
                  <div className="col" key={city.city.name}>
                    <div className="row">
                      <div className="col">
                        <h2>{city.city.name}</h2>
                        <img
                          src={`http://openweathermap.org/img/w/${
                            city.list[0].weather[0].icon
                            }.png`}
                          alt="weather_icon"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        {city.list[0].weather[0].description}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col mt-2">
                        <h3>
                          {tempConverter(city.list[0].main.temp)} &#8451;
                          </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location
});

export default connect(
  mapStateToProps,
  { setLocation, getCity, disableCityInput }
)(Location);
