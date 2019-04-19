import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-around">
      <a className="navbar-brand" href="#">
        Weather forecast
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="btn btn-link"
            href="https://github.com/volosgoto/weather_forecast_react"
          >
            <i className="fab fa-github fa-lg" /> GitHub code
          </a>
        </li>
        <li className="nav-item">
          <a
            className="btn btn-link"
            href="http://personal.infokus.org.ua/contact"
          >
            Author
          </a>
        </li>
      </ul>
    </nav>
  );
}
