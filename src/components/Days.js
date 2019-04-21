import React, { Component } from "react";
import { getCity } from "../actions/locationActions";
import tempConverter from "../helpers/tempConverter";
import pressureConverter from "../helpers/pressureConverter";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Days extends Component {
  // componentDidMount() {
  //   const { city } = this.props.match.params;
  //   this.props.getCity(city);
  // }

  render() {
    if (this.props.location.city) {
      let { name } = this.props.location.city;
      let { country } = this.props.location.city;
      let { humidity } = this.props.location.list[0].main;
      let { dt_txt } = this.props.location.list[0];
      let { temp } = this.props.location.list[0].main;
      let { pressure } = this.props.location.list[0].main;
      let { icon } = this.props.location.list[0].weather[0];
      let { description } = this.props.location.list[0].weather[0];
      let { wind } = this.props.location.list[0];


      // let list = this.props.location.cities[0];
      // let weatherListbyCity = list;
      console.log('Days', this.props.location.cities);
      return (
        <div>
          <div className="row mt-3">
            <div className="col-md-8 m-auto text-center">
              <h4 className="card-title">Days Forecast</h4>
              <div className="row">
                <div className="col">
                  <h2>
                    {name}, {country}
                  </h2>
                  <p>Current weather {dt_txt}</p>
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
                <div className="col mt-3 mb-2">
                  <p>{tempConverter(temp)} &#8451;</p>
                </div>
                <div className="col mt-3 mb-2">Wind {wind.speed} m/sec</div>
                <div className="col mt-3 mb-2">Humidity {humidity} %</div>
                <div className="col mt-3 mb-2">
                  Pressure {pressureConverter(pressure)} mmHg
              </div>
              </div>

              <div className="col mt-5">
                <Link to="/" className="btn btn-info">
                  <i className="fa fa-home" /> Back Home
              </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row mt-3 justify-content-center">
                {/* {cities.map(city => {

                  return (
                    <div>
                      <div className="col" key={city.city.name}>
                        <div className="row">
                          <div className="col">
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
                          <div className="col">
                            {city.list[0].weather[0].description}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col mt-2">
                            <h3>
                              {tempConverter(city.list[0].main.temp)} &#8451;
                          </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
              </div>
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
  location: state.location.city
});

export default connect(
  mapStateToProps,
  { getCity }
)(Days);
