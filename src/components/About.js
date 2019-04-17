import React, { Component } from "react";
import { getCity } from "../actions/locationActions";
import tempConverter from "../helpers/tempConverter";
import pressureConverter from "../helpers/pressureConverter";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class About extends Component {
  componentDidMount() {
    const { city } = this.props.match.params;
    this.props.getCity(city);
    // console.log("componentDidMount", city);
  }

  render() {
    let { city } = this.props.location;

    if (city.length == 0) {
      console.log("About city", city);
      console.log("About city main", city.main);

      return (
        <div className="row mt-5">
          <div className="col-md-6 m-auto text-center">
            <h4 className="card-title">Detail Weather</h4>
            <div className="row">
              <div className="col">
                {/* <img
                  className="img-fluid"
                  src={`http://openweathermap.org/img/w/${
                    city.weather[0].icon
                  }.png`}
                  alt="weather_icon"
                /> */}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>{city.name}</h2>
                <h2>{city.cod}</h2>
                <h2>{city.id}</h2>
                {/* <h2>{city.wind.speed}</h2> */}
              </div>
            </div>

            <div className="row">
              {/* <div className="col">{tempConverter(city.main.temp)}</div> */}
              {/* <div className="col">{tempConverter(city.main.temp_min)}</div> */}
              {/* <div className="col">{tempConverter(city.main.temp_max)}</div> */}
              <div className="col">
                {/* Pressure {pressureConverter(city.main.pressure)} */}
              </div>
              {/* <div className="col">Wind {city.wind.speed} meter/sec</div> */}
            </div>

            <div className="col mt-1">
              <button className="btn btn-primary ml-1">5 days forecast</button>
              <button className="btn btn-primary ml-1">10 days forecast</button>
              <div className="ml-5 mb-5 pb-5">
                <Link to="/" className="btn btn-success">
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else return false;
  }
}

const mapStateToProps = state => ({
  location: state.location
});

export default connect(
  mapStateToProps,
  { getCity }
)(About);
