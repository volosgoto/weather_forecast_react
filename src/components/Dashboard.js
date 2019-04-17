import React, { Component } from "react";
import Location from "./Location";
import City from "./City";
import { getWeather } from "../actions/weatherActions";
import { setLocation } from "../actions/locationActions";

import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    let { weather } = this.props;
    if (weather) {
      return (
        <div className="container">
          <City />
          <Location weather={weather} />
        </div>
      );
    } else {
      return (
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col text-center mt-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  weather: state.weather.weather
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Dashboard);
