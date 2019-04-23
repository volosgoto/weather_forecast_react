import React, { Component } from "react";
import { getCity } from "../actions/locationActions";

import tempConverter from "../helpers/tempConverter";
import pressureConverter from "../helpers/pressureConverter";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Days extends Component {
  componentDidMount() {
    const { city } = this.props.match.params;
    this.props.getCity(city);
  }

  getFiveDaysWeatherDates = dates => {
    return dates.map(element => {
      return {
        dt: element.dt,
        main: element.main,
        weather: element.weather,
        wind: element.wind,
        dt_txt: (() => {
          return new Date(Date.parse(element.dt_txt)).getDate();
        })()
      };
    });
  };

  // getDays = () => {
  //   let uniqueDate = [...new Set(this.getFiveDaysWeatherDates)];
  //   return uniqueDate;
  // };

  render() {
    let dates = this.props.location.list;

    console.log("Dates", dates);

    console.log("getFiveDaysWeatherDates", this.getFiveDaysWeatherDates(dates));
    // let days = this.getDays();
    // console.log("days", days);

    if (this.props.location) {
      let { name } = this.props.location.city;
      // let { country } = this.props.location.city;
      // let { humidity } = this.props.location.list[0].main;
      let { dt_txt } = this.props.location.list[0];
      // let { temp } = this.props.location.list[0].main;
      // let { pressure } = this.props.location.list[0].main;
      let { icon } = this.props.location.list[0].weather[0];
      let { description } = this.props.location.list[0].weather[0];
      // let { wind } = this.props.location.list[0];

      // let list = this.props.location.cities[0];
      // let weatherListbyCity = list;

      return (
        <div>
          <div className="row mt-3">
            <div className="col-md-8 m-auto text-center">
              <h4 className="card-title">{name} 5 day forecast</h4>
              <div className="row">
                <div className="col">
                  <h2>{dt_txt}</h2>
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
                  {/* <h3>{tempConverter(temp)} &#8451;</h3> */}
                </div>
                {/* <div className="col mt-3 mb-2">Wind {wind.speed} m/sec</div> */}
                <div className="col mt-3 mb-2">
                  {/* Pressure {pressureConverter(pressure)} mmHg */}
                </div>
              </div>

              <div className="col mt-1">
                {/* <Link to={`/about/${name}`} className="btn btn-info ml-1">
                  Back
                </Link> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="row mt-3 justify-content-center">
                {/* {days.map(city => {
                  return (
                    <div>
                      <div className="col" key={city.dt}>
                        <div className="row">
                          <div className="col">
                            <h2>{city.dt_txt}</h2>
                            <h2>{city.weather[0].description}</h2>
                            <img
                              src={`http://openweathermap.org/img/w/${
                                city.weather[0].icon
                              }.png`}
                              alt="weather_icon"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">{}</div>
                        </div>

                        <div className="row">
                          <div className="col mt-2">
                            <h3>{} &#8451;</h3>
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
