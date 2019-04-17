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
    // console.log(city);
    this.props.getCity(city);
  }

  render() {
    let { city } = this.props.location;
    console.log("About city name", city.name);
    return (
      <div>
        <h1>Detail Wether</h1>

        <div className="ml-5 mb-5 pb-5">
          <Link to="/" className="btn btn-success">
            Back Home
          </Link>
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
  { getCity }
)(About);
