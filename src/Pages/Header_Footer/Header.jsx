import React, { useState } from "react";
import "../../Pages/Style.css";
import Container from "@mui/material/Container";
import logo from "../../assets/CharityDonation.png";
import Grid from "@mui/material/Grid";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container
      className="cust-container"
      fixed
      sx={{
        backgroundColor: "white",
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container className="cust-first-grid" spacing={3}>
        <Grid className="cust-hader-grid child-grid-1" grid xs>
          <Grid xs={2}>
            <Link to="/" relative="path">
              <img className="cust-header-logo" src={logo} />
            </Link>
          </Grid>
        </Grid>
        <Grid className="cust-hader-grid child-grid-2" grid xs={8}>
          <Grid>
            <ButtonGroup
              variant="text"
              className="cust-menu-link-group"
              aria-label="text button group"
            >
              <Link to="/createcampaign" relative="path">
                <Button value="shop"> Create Campaign</Button>
              </Link>
              <Link to="/campaignpage" relative="path">
              <Button>Campaign</Button>
              </Link>
              <Link to="/thankyou" relative="path">
              <Button>Thank You</Button>
              </Link>
              <Button className="cust-connect-wallet">Connect Wallet</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
