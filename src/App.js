import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Hours from "./components/Hours";
import Days from "./components/Days";

import NotFound from "./components/NotFound";

import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about/:city" component={About} />
          <Route exact path="/hours/:city" component={Hours} />
          <Route exact path="/days/:city" component={Days} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
