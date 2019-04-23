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

  getDays = dates => {
    let arr = this.getFiveDaysWeatherDates(dates);
    let dt_txt_current = 0;
    let resultArray = [];

    arr.forEach(element => {
      if (dt_txt_current != element.dt_txt) {
        resultArray.push(element);
        dt_txt_current = element.dt_txt;
      }
    });
    resultArray.pop();
    return resultArray;
  };

  render() {
    let dates = this.props.location.list;
    let filterByDate = this.getDays(dates);
    console.log("Dates", dates);

    if (this.props.location) {
      let { name } = this.props.location.city;
      let { dt_txt } = this.props.location.list[0];
      let { temp } = this.props.location.list[0].main;
      let { icon } = this.props.location.list[0].weather[0];
      let { description } = this.props.location.list[0].weather[0];

      return (
        <div>
          <div className="row mt-3">
            <div className="col-md-8 m-auto text-center">
              <h4 className="card-title">{name} 5 day forecast</h4>
              <div className="row">
                <div className="col" />
              </div>
              <div className="row ">
                <div className="col mt-3 mb-2" />
                <div className="col mt-3 mb-2" />
              </div>

              <div className="col mt-1">
                <Link to={`/about/${name}`} className="btn btn-success ml-1">
                  Back
                </Link>
                <Link to="/" className="btn btn-info ml-1">
                  <i className="fa fa-home" /> Back Home
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="row mt-3 justify-content-center">
                {filterByDate.map(city => {
                  return (
                    <div>
                      <div className="col" key={city.dt}>
                        <div className="row">
                          <div className="col">
                            <h2>Date {city.dt_txt}</h2>
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
                            <h3>{tempConverter(temp)} &#8451;</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
