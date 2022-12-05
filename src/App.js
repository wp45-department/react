// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Productgrid from "./Pages/Productgrid";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Productgrid />
        </Route>
      </Switch>
    );
  }
}

export default App;
