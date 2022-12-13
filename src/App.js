// App.js

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Home1 from "./Pages/Home";
import Header from "./Pages/Header";
import Footersec from "./Pages/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home1} />
          </Switch>
          <Footersec />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
