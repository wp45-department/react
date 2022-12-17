import React, { useState } from "react";
import "../../Pages/Style.css";
import Container from "@mui/material/Container";
import cardimage from "../../assets/funding.png";
import logo1 from "../../assets/logoipsum-247.svg";
import logo2 from "../../assets/logoipsum-248.svg";
import logo3 from "../../assets/logoipsum-249.svg";
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
      className="cust-container"
      fixed
      sx={{
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container className="cust-banner-con" spacing={2}>
        <Grid item className="cust-banner-main-grid" xs={12}>
          <item className="cust-banner-heading">
            Crowdfunding using the powers of Crypto & Blockchain
          </item>
        </Grid>
        <Grid item className="cust-banner-main-grid" xs={12}>
          <item>
            <Button className="cust-how-it-work">Create Campaign</Button>
          </item>
        </Grid>
      </Grid>

      <Grid container className="cust-card-sec1" spacing={2}>
        <Grid item xs={4}>
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img className="cust-card-image" src={cardimage} />
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Relief Fund
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By ABCDEFGHIJKLMONPQRSTUVWXYZ
                  </Typography>
                  <Typography
                    className="cust-card-amount"
                    variant="h4"
                    component="div"
                  >
                    3.12 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img className="cust-card-image" src={cardimage} />
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Relief Fund
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By ABCDEFGHIJKLMONPQRSTUVWXYZ
                  </Typography>
                  <Typography
                    className="cust-card-amount"
                    variant="h4"
                    component="div"
                  >
                    3.12 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img className="cust-card-image" src={cardimage} />
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Relief Fund
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By ABCDEFGHIJKLMONPQRSTUVWXYZ
                  </Typography>
                  <Typography
                    className="cust-card-amount"
                    variant="h4"
                    component="div"
                  >
                    3.12 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </item>
        </Grid>
      </Grid>

      <Grid container className="cust-card-sec1 cust-card-sec2" spacing={2}>
        <Grid item xs={4}>
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img className="cust-card-image" src={cardimage} />
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Relief Fund
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By ABCDEFGHIJKLMONPQRSTUVWXYZ
                  </Typography>
                  <Typography
                    className="cust-card-amount"
                    variant="h4"
                    component="div"
                  >
                    3.12 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img className="cust-card-image" src={cardimage} />
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Relief Fund
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By ABCDEFGHIJKLMONPQRSTUVWXYZ
                  </Typography>
                  <Typography
                    className="cust-card-amount"
                    variant="h4"
                    component="div"
                  >
                    3.12 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </item>
        </Grid>
        <Grid item xs={4}>
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <img className="cust-card-image" src={cardimage} />
                  <Typography gutterBottom variant="h5" component="div">
                    Covid Relief Fund
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By ABCDEFGHIJKLMONPQRSTUVWXYZ
                  </Typography>
                  <Typography
                    className="cust-card-amount"
                    variant="h4"
                    component="div"
                  >
                    3.12 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </item>
        </Grid>
      </Grid>

      <Grid container className="second-section" spacing={2}>
        <Grid item xs={8}>
          <item className="cust-banner-heading">How Betterfund Works</item>
        </Grid>
        <Grid item xs={4}>
          <item></item>
        </Grid>
      </Grid>

      <Grid container className="second-section-2" spacing={2}>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <item>
              <img src={logo1} />
            </item>
          </Grid>
          <item class="cust-last-sec-heading">
            Create a Campaign for Funding
          </item>
          <Grid item xs={12}>
          <item class="cust-last-sec-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </item>
        </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <item>
              <img src={logo2} />
            </item>
          </Grid>
          <item class="cust-last-sec-heading">Share your Campaign</item>
          <Grid item xs={12}>
          <item class="cust-last-sec-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </item>
        </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <item>
              <img src={logo3} />
            </item>
          </Grid>
          <item class="cust-last-sec-heading">Request and Withdraw Funds</item>
          <Grid item xs={12}>
            <item class="cust-last-sec-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </item>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
