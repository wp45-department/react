import React, { useState } from "react";
import "../../Pages/Style.css";
import Container from "@mui/material/Container";
import thankyou from "../../assets/thankyou.jpg";

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
     <grid className="thank-you-grid">
     <img className="cust-thank-you-img" src={thankyou} />
     </grid>
    </Container>
  );
}

export default App;
