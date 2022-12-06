// App.js

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Productgrid";
import Singleproduct from "./Pages/singleproduct"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Products} />
            <Route exact path="/details" component={Singleproduct} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;