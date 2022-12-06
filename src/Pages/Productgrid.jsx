import React, { useState } from "react";
import "./Style.css";
import Container from "@mui/material/Container";
import logo from "../../src/ezgif.com-gif-maker.png";
import headerlogo from "../../src/header-logo.svg";
import Grid from "@mui/material/Grid";
import { Button, ButtonGroup } from "@mui/material";
import { withTheme } from "@emotion/react";
import { spacing } from "@mui/system";
import { Route, Switch } from "react-router-dom";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import cardimage from "./../Pages/cardimage.png";

export default function Productgrid() {
  return (
    <Container
      className="cust-shop-container cust-container"
      fixed
      sx={{
        backgroundColor: "White",
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        className="cust-first-grid cust-card-container"
        spacing={3}
      >
        <Grid className="cust-hader-grid child-grid-1" grid xs>
          <Grid xs={2}>
            <a href="/">
              <img className="cust-header-logo" src={headerlogo} />
            </a>
          </Grid>
        </Grid>
        <Grid className="cust-hader-grid child-grid-2" grid xs={6}>
          <Grid>
            <ButtonGroup
              variant="text"
              className="cust-shop-menu-link-group"
              aria-label="text button group"
            >
              <a href="/shop">
                <Button value="shop">🚀 Explore </Button>
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

      <Grid container spacing={2} className="cust-card-grid">
        <Grid item xs={4}>
          <item>
            <Card className="cust-card-design">
              <CardContent>
                <Typography variant="h5" component="div">
                  <img className="cust-card-image" src={cardimage} />
                </Typography>
              </CardContent>
              <CardActions className="cust-card-buttons">
                <Button size="large" className="cust-card-button">
                <a href="/details"> <a href="/details"> Buy -</a></a>
                </Button>
                <Button size="large" className="cust-card-button">
                  Bid -
                </Button>
              </CardActions>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card className="cust-card-design">
              <CardContent>
                <Typography variant="h5" component="div">
                  <img className="cust-card-image" src={cardimage} />
                </Typography>
              </CardContent>
              <CardActions className="cust-card-buttons">
                <Button size="large" className="cust-card-button">
                  <a href="/details"> Buy -</a>
                </Button>
                <Button size="large" className="cust-card-button">
                  Bid -
                </Button>
              </CardActions>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card className="cust-card-design">
              <CardContent>
                <Typography variant="h5" component="div">
                  <img className="cust-card-image" src={cardimage} />
                </Typography>
              </CardContent>
              <CardActions className="cust-card-buttons">
                <Button size="large" className="cust-card-button">
                  <a href="/details"> Buy -</a>
                </Button>
                <Button size="large" className="cust-card-button">
                  Bid -
                </Button>
              </CardActions>
            </Card>
          </item>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="cust-card-grid">
        <Grid item xs={4}>
          <item>
            <Card className="cust-card-design">
              <CardContent>
                <Typography variant="h5" component="div">
                  <img className="cust-card-image" src={cardimage} />
                </Typography>
              </CardContent>
              <CardActions className="cust-card-buttons">
                <Button size="large" className="cust-card-button">
                  <a href="/details"> Buy -</a>
                </Button>
                <Button size="large" className="cust-card-button">
                  Bid -
                </Button>
              </CardActions>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card className="cust-card-design">
              <CardContent>
                <Typography variant="h5" component="div">
                  <img className="cust-card-image" src={cardimage} />
                </Typography>
              </CardContent>
              <CardActions className="cust-card-buttons">
                <Button size="large" className="cust-card-button">
                  <a href="/details"> Buy -</a>
                </Button>
                <Button size="large" className="cust-card-button">
                  Bid -
                </Button>
              </CardActions>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card className="cust-card-design">
              <CardContent>
                <Typography variant="h5" component="div">
                  <img className="cust-card-image" src={cardimage} />
                </Typography>
              </CardContent>
              <CardActions className="cust-card-buttons">
                <Button size="large" className="cust-card-button">
                  <a href="/details"> Buy -</a>
                </Button>
                <Button size="large" className="cust-card-button">
                  Bid -
                </Button>
              </CardActions>
            </Card>
          </item>
        </Grid>
      </Grid>

      <Grid
        container
        className="cust-footer-grid cust-footer-shop"
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
              <Button className="cust-footer-button">Explore</Button>
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
