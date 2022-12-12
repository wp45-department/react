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
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>This is home page</h1>
    </Container>
  );
}

export default App;