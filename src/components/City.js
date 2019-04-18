import React, { Component } from "react";
import { getCity } from "../actions/locationActions";
import tempConverter from "../helpers/tempConverter";
import pressureConverter from "../helpers/pressureConverter";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class City extends Component {
  getCityInfo = () => {
    // console.log("this.props.match.params", this.props.match.params);
    // console.log("City", this.props.location.cities[0].name);
    let city = this.props.location.city.name;
    this.props.getCity(city);
  };

  render() {
    if (this.props.location) {
      let { city } = this.props.location;
      let { temp } = this.props.location.list[0].main;
      let { pressure } = this.props.location.list[0].main;
      let { icon } = this.props.location.list[0].weather[0];
      let { description } = this.props.location.list[0].weather[0];
      let { wind } = this.props.location.list[0];
      return (
        <div className="row mt-3">
          <div className="col-md-8 m-auto text-center">
            <h4 className="card-title">Weather today</h4>
            <div className="row">
              <div className="col">
                <h2>{city.name}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="weather_icon"
                />
                <div className="col">{description}</div>
              </div>
            </div>
            <div className="row ">
              <div className="col mt-3 mb-2">{tempConverter(temp)} &#8451;</div>
              <div className="col mt-3 mb-2">Wind {wind.speed} m/sec</div>
              <div className="col mt-3 mb-2">
                Pressure {pressureConverter(pressure)} mmHg
              </div>
            </div>

            <div className="col mt-1">
              <button className="btn btn-primary ml-1">5 days forecast</button>
              <button className="btn btn-primary ml-1">10 days forecast</button>
              <Link
                to={`/about/${city.name}`}
                onClick={this.getCityInfo}
                className="btn btn-info ml-1"
              >
                Details
              </Link>
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
  location: state.location.cities[0]
});

export default connect(
  mapStateToProps,
  { getCity }
)(City);
