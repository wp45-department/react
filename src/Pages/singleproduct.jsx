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
import cardimage from "./../Pages/cardimage.png";

export default function Productgrid() {
  return (
    <Container className="cust-main-container">
      <Grid
        container
        className="cust-first-grid cust-single-product"
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
      <Grid
        container
        sx={{
          backgroundColor: "White",
          height: "auto",
          width: "auto",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="single-rpdoct-grid"
        spacing={2}
      >
        <Grid item className="product-image-sec" xs={6}>
          <item>
            <img className="cust-card-image" src={cardimage} />
          </item>
        </Grid>
        <Grid item xs={6} className="product-detials">
          <item>
            <h2>SpaceBud #9999</h2>
            <h3 className="cust-category">Lion</h3>
            <Grid container className="inner-product-details" spacing={2}>
              <Grid item className="details-right-sec" xs={6}>
                <item>
                  <h3>Listing</h3>
                </item>
                <item>
                  <h6>Not listed</h6>
                  <Button
                    size="large"
                    disabled
                    className="cust-details-button cust-details-button-right"
                  >
                    Buy
                  </Button>
                </item>
              </Grid>
              <Grid item xs={6} className="details-right-sec">
                <item>
                  <h3>Bid</h3>
                </item>
                <item>
                  <h6>No offer</h6>
                  <Button
                    size="large"
                    disabled
                    className="cust-details-button cust-details-button-left"
                  >
                    Make Offer
                  </Button>
                </item>
              </Grid>
            </Grid>
            <h3 className="last-sale">Last Sale</h3>
            <h3 className="detials-owner">Owner</h3>
            <h6 className="owner-details">addr1qx00yw...hqegsalq4w2</h6>
          </item>
          <item>
            <h3 className="last-sale">Gadgets</h3>
          </item>
        </Grid>
      </Grid>

      <Grid
        container
        className="cust-footer-grid cust-footer-shop"
        sx={{ backgroundColor: `Black`, width: "auto" }}
        spacing={3}
      >
        <Grid item xs={6} className="single-product-footer-design">
          <item className="cust-footer-logo-col sp-logo-clm">
            <Grid className="footer-col-one" item xs={6} md={6}>
              <item>
                <a href="/">
                  <img className="cust-footer-logo" src={headerlogo} />
                </a>
              </item>
            </Grid>
            <Grid item xs={6} md={6}>
              <item className="cust-footer-logo-text">SpaceBudz</item>
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
