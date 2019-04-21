import React, { Component } from "react";
import { getWeather } from "../actions/weatherActions";
import tempConverter from "../helpers/tempConverter";
import pressureConverter from "../helpers/pressureConverter";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

export default class Days extends Component {
  componentDidMount() {
    // const { city } = this.props.match.params;
    // this.props.getWeather(city);
  }

  render() {
    if (this.props.weather) {
      // let { name } = this.props.location.city;
      // let { country } = this.props.location.city;
      // let { humidity } = this.props.location.list[0].main;
      // let { dt_txt } = this.props.location.list[0];
      // let { temp } = this.props.location.list[0].main;
      // let { pressure } = this.props.location.list[0].main;
      // let { icon } = this.props.location.list[0].weather[0];
      // let { description } = this.props.location.list[0].weather[0];
      // let { wind } = this.props.location.list[0];


      // let list = this.props.location.cities[0];
      // let weatherListbyCity = list;
      console.log('Days', this.props.weather.city.name);
      return (
        <div>

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

