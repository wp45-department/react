// App.js

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Home1 from "./Pages/Home";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route component={Header} />
            <Route exact path="/" component={Home1} />
            <Route component={Footer} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;