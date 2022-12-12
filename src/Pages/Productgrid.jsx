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
                  <a href="/details">
                    {" "}
                    <a href="/details"> Buy -</a>
                  </a>
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
    </Container>
  );
}
