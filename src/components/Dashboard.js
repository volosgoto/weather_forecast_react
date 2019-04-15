import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      // <div className="container">
      <div className="container">
        <div className="row mt-1">
          <div
            className="col-md-6 m-auto text-center"
            // style={{ border: "1px solid blue" }}
          >
            <h1>Weather today</h1>
            <h2>City: Kyiv</h2>
            <p>Temperature: 15 C</p>
            <p>Pressure</p>
            <input
              type="text"
              className="inputLocation placeholder"
              name=""
              id=""
              placeholder="placeholder"
            />
            <button className="btn btn-success">Change Location</button>
            <div className="col mt-1">
              <button className="btn btn-primary ml-1">5 days forecast</button>
              <button className="btn btn-primary ml-1">10 days forecast</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">Recent Places</div>
        </div>
        <div className="row mt-5">
          <div className="col text-left">London</div>
          <div className="col text-left">Paris</div>
          <div className="col text-left">Berlin</div>
          <div className="col text-left">Lviv</div>
          <div className="col text-left">Madrid</div>
        </div>
      </div>

      // </div>
    );
  }
}

export default Dashboard;
