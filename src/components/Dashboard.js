import React, { Component } from "react";
import Location from "./Location";
import City from "./City";
import Spinner from "./Spinner";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import { getWeather } from "../actions/weatherActions";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {

    let { weather } = this.props;
    if (weather) {
      return (
        <div>
          <Navbar />
          <div className="container-fluid">
            <City />
            <Location weather={weather} />
          </div>
          <Footer/>
        </div>

      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Dashboard);
