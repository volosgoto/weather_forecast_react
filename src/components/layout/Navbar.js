import React from 'react'

export default function Navbar() {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-around">
      <a class="navbar-brand" href="#">Weather forecast</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="btn btn-link" href="https://github.com/volosgoto/weather_forecast_react"><i className="fab fa-github fa-lg" /> GitHub code</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-link" href="http://personal.infokus.org.ua/contact">Author</a>
        </li>
      </ul>
    </nav>

  )
}
