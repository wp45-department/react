// App.js

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Home1 from "./Pages/Home/Home";
import Header from "./Pages/Header_Footer/Header";
import Footersec from "./Pages/Header_Footer/Footer";
import campaignpage from "./Pages/Campaign/CampaignPage";
import thankyoupage from "./Pages/Thank_you/thankyou";
import createcampaign from "./Pages/Create_campaign/createcam";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
          <Route exact path="/campaignpage" component={campaignpage} />
            <Route exact path="/" component={Home1} />
            <Route exact path="/thankyou" component={thankyoupage} />
            <Route exact path="/createcampaign" component={createcampaign} />
          </Switch>
          <Footersec />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
