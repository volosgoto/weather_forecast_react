import React, { Component } from "react";
import { setLocation, getCity } from "../actions/locationActions";
import tempConverter from "../helpers/tempConverter";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Location extends Component {
  setLocationFromInput = () => {
    this.props.setLocation(this.locationInput.value);
    return (this.locationInput.value = "");
  };

  render() {
    let cities = this.props.location.cities;
    // console.log("Location", cities);
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
              <h4>Recent Places</h4>
            </div>
          ) : null}
        </div>
        <div className="row mt-5">
          {cities.map(city => {
            this.getCityInfo = () => {
              this.props.getCity(city.city.name);
            };
            return (
              <Link
                key={city.city.name}
                to={`/about/${city.city.name}`}
                onClick={this.getCityInfo}
                className="btn btn-info ml-1 mb-1"
              >
                <div className="col text-left" key={city.city.name}>
                  <div className="row">
                    <div className="col text-left">
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
                    <div className="col text-left">
                      {city.list[0].weather[0].description}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col mt-2 text-left">
                      <h3>{tempConverter(city.list[0].main.temp)} &#8451;</h3>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      {" "}
                      Day {tempConverter(city.list[0].main.temp_max)} &#8451;
                    </div>
                    <div className="col" />
                  </div>

                  <div className="row">
                    <div className="col">
                      Night {tempConverter(city.list[0].main.temp_min)} &#8451;
                    </div>
                  </div>

                  <div className="row">
                    <div className="col text-left">
                      Pressure {tempConverter(city.list[0].main.pressure)} mmHg
                    </div>
                  </div>

                  <div className="row">
                    <div className="col text-left">
                      Wind {city.list[0].wind.speed} m/sec
                    </div>
                  </div>
                </div>
              </Link>
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
  { setLocation, getCity }
)(Location);
