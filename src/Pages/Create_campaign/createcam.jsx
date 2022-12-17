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
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <Container
      className="cust-container cust-create-sec-campaign cust-create-sec-campaign2"
      fixed
      sx={{
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid className="form-grid-main" item xs={12}>
          <Grid container className="cust-banner-con" spacing={2}>
            <Grid item className="cust-banner-main-grid" xs={12}>
              <item className="cust-banner-heading">Create a New Campaign</item>
            </Grid>
            <Grid className="cust-form-campaign" xs={12}>
            <item><TextField className="cust-form-field" required id="outlined-required" label="Name" /></item>
            </Grid>
            <Grid className="cust-form-campaign" xs={12}>
            <item><TextField className="cust-form-field" required id="outlined-required" label="Price" /></item>
            </Grid>
            <Grid className="cust-form-campaign-submit" xs={12}>
            <item><Button className="cust-form-field-submit" variant="outlined">Submit</Button></item>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      
    </Container>
  );
}

export default App;
