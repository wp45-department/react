import React, { useState } from "react";
import "./Style.css";
import Container from "@mui/material/Container";
import logo from "../../src/ezgif.com-gif-maker.png";
import headerlogo from "../../src/header-logo.svg";
import Grid from "@mui/material/Grid";
import { Button, ButtonGroup } from "@mui/material";
import { withTheme } from "@emotion/react";
import { spacing } from "@mui/system";
import { Route,Switch } from "react-router-dom";
import { Link } from '@mui/material';
import { Typography } from '@mui/material';

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
      <Grid container className="cust-first-grid" spacing={3}>
        <Grid className="cust-hader-grid child-grid-1" grid xs>
          <Grid xs={2}>
            <img className="cust-header-logo" src={headerlogo} />
          </Grid>
        </Grid>
        <Grid className="cust-hader-grid child-grid-2" grid xs={6}>
          <Grid>
            <ButtonGroup
              variant="text"
              className="cust-menu-link-group"
              aria-label="text button group"
            >
            <a href="/shop">
            <Button value="shop"> 🚀 Explore</Button>
            </a>
              <Button>Community</Button>
              <Button>More</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid className="cust-hader-grid child-grid-3" grid xs={2}>
          <Grid>
            <Button variant="contained" size="large">
              Start
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="cust-second-grid" spacing={2}>
        <Grid className="cust-hader-grid child-grid2-1" grid xs>
          <Grid xs={7}></Grid>
        </Grid>
        <Grid className="cust-hader-grid child-grid2-2" grid xs={5}>
          <Grid>
            <span className="banner-heading">
              Welcome to <span className="second-heading">SpaceBudz</span>
            </span>
          </Grid>
          <Grid>
            <span className="banner-subline">
              Let's go on an adventure, where will your SpaceBudz take you?
            </span>
          </Grid>
          <Grid>
            <Button variant="contained" size="large">
              Explore ➜
            </Button>
          </Grid>
        </Grid>
      </Grid>

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
                <img className="cust-footer-logo" src={headerlogo} /></a>
              </item>
            </Grid>
            <Grid item xs={6} md={6}>
            <a href="/">
              <item className="cust-footer-logo-text">SpaceBudz</item></a>
            </Grid>
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
            <a href="/shop"><Button className="cust-footer-button">Explore</Button></a>
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
