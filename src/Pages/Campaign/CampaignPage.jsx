import React, { useState } from "react";
import "../../Pages/Style.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, ButtonGroup } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function App() {
  return (
    <Container
      className="cust-container cust-main-sec-campaign"
      fixed
      sx={{
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container className="cust-banner-con" spacing={2}>
            <Grid item className="cust-banner-main-grid" xs={12}>
              <item className="cust-banner-heading">Covid Relief Fund</item>
            </Grid>
            <Grid item className="cust-banner-main-grid" xs={12}>
              <item className="cust-subtext-campaign">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </item>
            </Grid>
            <Grid item className="cust-banner-main-grid" xs={12}>
              <item className="cust-subtext-campaignlink">
                View on Rinkeby Etherscan
              </item>
            </Grid>

            <Grid container className="cust-campaign-details-sec" spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  className="cust-div-campaign-details"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <item className="cust-campaign-name">
                      Minimum Contribution{" "}
                    </item>
                  </Grid>
                  <Grid item xs={12}>
                    <item className="cust-amount">0.0001 ETH ($2.75)</item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="cust-campaign-details-sec" spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  className="cust-div-campaign-details"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <item className="cust-campaign-name">
                      Minimum Contribution{" "}
                    </item>
                  </Grid>
                  <Grid item xs={12}>
                    <item className="cust-amount">0.0001 ETH ($2.75)</item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="cust-campaign-details-sec" spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  className="cust-div-campaign-details"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <item className="cust-campaign-name">
                      Minimum Contribution{" "}
                    </item>
                  </Grid>
                  <Grid item xs={12}>
                    <item className="cust-amount">0.0001 ETH ($2.75)</item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="cust-campaign-details-sec" spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  className="cust-div-campaign-details"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <item className="cust-campaign-name">
                      Minimum Contribution{" "}
                    </item>
                  </Grid>
                  <Grid item xs={12}>
                    <item className="cust-amount">0.0001 ETH ($2.75)</item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container className="cust-campaign-details-sec" spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                className="cust-div-campaign-details1"
                spacing={2}
              >
                <Grid item xs={12}>
                  <item className="cust-campaign-name">Campaign Balance </item>
                </Grid>
                <Grid item xs={12}>
                  <item className="cust-amount">
                    3.12 ETH <item className="cust-amount2"> ($9876.65) </item>{" "}
                  </item>
                </Grid>
                <Grid item xs={12}>
                  <item>Target of 11999 ETH ($32993050)</item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="cust-campaign-details-sec" spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                className="cust-div-campaign-details1"
                spacing={2}
              >
                <Grid item xs={12}>
                  <item className="cust-contribute">Contribute Now! </item>
                </Grid>
                <Grid item xs={12}>
                  <item>Amount in Ether you want to contribute </item>
                </Grid>
                <Grid item xs={12}>
                  <form className="cust-form">
                    <fieldset>
                      <label>
                        <input name="name" />
                      </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                  </form>
                  <item>
                    {" "}
                    <Button
                      variant={"outlined"}
                      color={"secondary"}
                      fullWidth
                      className="cust-wallet-btn"
                    >
                      <item className="cust-icon"> ! </item> Please Connet Your
                      Wallet to Contribute
                    </Button>
                  </item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="cust-campaign-details-sec" spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                className="cust-div-campaign-details1"
                spacing={2}
              >
                <Grid item xs={12}>
                  <item className="cust-see-funds">You can see the where funds are being used and if you have contributed you can also approve those withdrawal request. </item>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant={"outlined"}
                    color={"secondary"}
                    fullWidth
                    className="cust-view-withdrawa2"
                  >
                    Please Connet Your Wallet to Contribute
                  </Button>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
