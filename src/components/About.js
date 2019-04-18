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
  }

  render() {
    if (this.props.location.city) {
      console.log("About", this.props.location);
      let { name } = this.props.location.city;
      let { temp } = this.props.location.list[0].main;
      let { temp_min } = this.props.location.list[0].main;
      let { temp_max } = this.props.location.list[0].main;
      let { pressure } = this.props.location.list[0].main;
      let { icon } = this.props.location.list[0].weather[0];
      let { description } = this.props.location.list[0].weather[0];
      let { wind } = this.props.location.list[0];
      return (
        <div className="row">
          <div className="row">
            <div className="col text-left">
              <h2>{name}</h2>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt="weather_icon"
              />
            </div>
          </div>
          <div className="row">
            <div className="col text-left">{description}</div>
          </div>
          <div className="row">
            <div className="col mt-2 text-left">
              <h3>{tempConverter(temp)} &#8451;</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">Day {tempConverter(temp_max)} &#8451;</div>
            <div className="col" />
          </div>
          <div className="row">
            <div className="col">Night {tempConverter(temp_min)} &#8451;</div>
          </div>
          <div className="row">
            <div className="col text-left">
              Pressure {tempConverter(pressure)} mmHg
            </div>
          </div>
          <div className="row">
            <div className="col text-left">Wind {wind.speed} m/sec</div>
          </div>
          <Link to="/" className="btn btn-success">
            Back Home
          </Link>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = state => ({
  location: state.location.city
});

export default connect(
  mapStateToProps,
  { getCity }
)(About);
