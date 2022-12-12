import React, { useState } from "react";
import "./Style.css";
import Container from "@mui/material/Container";
import logo from "../../src/betterfund.png";
import headerlogo from "../../src/betterfund.png";
import Grid from "@mui/material/Grid";
import { Button, ButtonGroup } from "@mui/material";
import { withTheme } from "@emotion/react";
import { spacing } from "@mui/system";
import { Route, Switch } from "react-router-dom";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";


function App() {
  return (
    <Container
      className="cust-container"
      fixed
      sx={{
        backgroundImage: `url(${logo})`,
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        className="cust-footer-grid"
        sx={{ backgroundColor: `Black`, width: "auto" }}
        spacing={3}
      >
        <Grid item xs={6}>
          <item className="cust-footer-logo-col">
            <Grid className="footer-col-one" item xs={6} md={6}>
              <item>
                <a href="/">
                  <img className="cust-footer-logo" src={headerlogo} />
                </a>
              </item>
            </Grid>
            <Grid item xs={6} md={6}></Grid>
          </item>
          <ButtonGroup
            variant="text"
            className="cust-after-logo-text"
            aria-label="text button group"
            orientation="vertical"
          >
            <Button className="cust-terms-text">Terms and Conditions</Button>
            <Button className="cust-terms-email-text">info@spacebudz.io</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={3}>
          <item>
            <ButtonGroup
              variant="text"
              className="cust-menu-link-group"
              aria-label="text button group"
              orientation="vertical"
            >
              <a href="/shop">
                <Button className="cust-footer-button">Explore</Button>
              </a>
              <Button className="cust-footer-button">About</Button>
              <Button className="cust-footer-button">help</Button>
              <Button className="cust-footer-button">Marketplace</Button>
              <Button className="cust-footer-button">Privacy Policy</Button>
            </ButtonGroup>
          </item>
        </Grid>
        <Grid item xs={3}>
          <item>
            {" "}
            <ButtonGroup
              variant="text"
              className="cust-menu-link-group"
              aria-label="text button group"
              orientation="vertical"
            >
              <Button className="cust-footer-button">Twiiter</Button>
              <Button className="cust-footer-button">Discord</Button>
              <Button className="cust-footer-button">Telegram</Button>
            </ButtonGroup>
          </item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
