import React, { Component } from "react";
import { setLocation } from "../actions/locationActions";

import { connect } from "react-redux";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setLocationFromInput = () => {
    this.props.setLocation(this.locationInput.value);
    console.log(this.locationInput.value);
    this.setState({
      cities: this.locationInput.value
    });

    this.locationInput.value = "";
  };

  render() {
    // console.log("Location", this.props.location.cities);
    let cities = this.props.location.cities;
    return (
      <div>
        <div className="row">
          <div className="col-md-6 m-auto text-center">
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
              className="btn btn-success"
              onClick={this.setLocationFromInput}
            >
              Change Location
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">Recent Places</div>
        </div>
        <div className="row mt-5">
          {console.log("cities", cities)}
          {cities.map(city => {
            return (
              <div className="col text-left" key={city.id++}>
                {city.name}
              </div>
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
  { setLocation }
)(Location);
