import React, { Component } from "react";
import { getCity } from "../actions/locationActions";
import tempConverter from "../helpers/tempConverter";
import pressureConverter from "../helpers/pressureConverter";
import Spinner from "./Spinner";

import { connect } from "react-redux";

class City extends Component {
  render() {
    let [city] = this.props.location.cities;

    if (city) {
      return (
        <div className="row mt-5">
          <div className="col-md-6 m-auto text-center">
            <h4 class="card-title">Weather today</h4>
            <div className="row">
              <div className="col">
                <img
                  className="img-fluid"
                  src={`http://openweathermap.org/img/w/${
                    city.weather[0].icon
                  }.png`}
                  alt="weather_icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>{city.name}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col">{tempConverter(city.main.temp)}</div>
              <div className="col">{tempConverter(city.main.temp_min)}</div>
              <div className="col">{tempConverter(city.main.temp_max)}</div>
              <div className="col">
                Pressure {pressureConverter(city.main.pressure)}
              </div>
              <div className="col">Wind {city.wind.deg} meter/sec</div>
            </div>

            <div className="col mt-1">
              <button className="btn btn-primary ml-1">5 days forecast</button>
              <button className="btn btn-primary ml-1">10 days forecast</button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
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
