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
    console.log('Location', cities);
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
          {
            cities.map(city => {
              return (
                <div className="col text-left" key={city.city.id}>
                  <h2>{city.city.name}</h2>
                  <img
                    src={`http://openweathermap.org/img/w/${city.list[0].weather[0].icon}.png`}
                    alt="weather_icon"
                  />
                  <p>{city.list[0].weather[0].description} </p>
                  <h5>Temp {tempConverter(city.list[0].main.temp)} &#8451;</h5>
                  <img src="http://openweathermap.org/img/w/01d.png" alt="" />
                  <p>Day Temp {tempConverter(city.list[0].main.temp_max)} &#8451;

                  </p>
                  <img src="http://openweathermap.org/img/w/01n.png" alt="" />
                  <p>Night {tempConverter(city.list[0].main.temp_min)} &#8451;

                  </p>
                  <p>Pressure {tempConverter(city.list[0].main.pressure)} </p>
                  <p>Wind {(city.list[0].wind.speed)} </p>

                  {/* 
                  
             
                  
                  <p>Pressure {pressureConverter(city.main.pressure)} mmHg</p>
                  <p>Wind {city.wind.speed} meter/sec</p> */}
                </div>
              );
            })
          }
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
