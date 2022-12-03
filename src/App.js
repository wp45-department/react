

// import {Todos} from "./MyComponents/Todos";
// import Footer from "./MyComponents/Footer";
// import {Button} from '@mui/material';
// import {Button,ButtonGroup} from '@mui/material/'
// import Checkbox from '@mui/material/Checkbox'

// function App() {
//   const [color,setColor]=useState("secondary")
//   const [disbtn,setdisbtn]=useState(false)
//   function customMe(){
//     alert("Function called")
//     setColor("primary")
//     setdisbtn(true)
//   }
//   return (
// <div>
// <Header title={"Prem Dudhrejiya"} searchbar={true}/>
// <Todos/>
// <Footer/>
// <h1>React MUI</h1>
// <Button color={color} disabled={disbtn} variant="contained" onClick={() => {customMe()}} >Click Me</Button>
// <ButtonGroup orientation="vertical" variant="contained">
// <Button>One</Button>
// <Button>Two</Button>
// <Button>Three</Button>
// </ButtonGroup>
// </div>
// );
// }
// function App() {
//   function Message(e) {
//     console.warn(e.target.value)
//   }
//   return (
// <div>
// <Checkbox color="secondary" value="Prem" onChange={(e)=>{Message(e)}}/>
// </div>
// );
// }

import React,{useState} from 'react';
import './App.css';
import Container from '@mui/material/Container';
import logo from '../src/ezgif.com-gif-maker.png';
import headerlogo from '../src/header-logo.svg';
import Grid from '@mui/material/Grid'
import { Button,ButtonGroup } from '@mui/material';
import { withTheme } from '@emotion/react';
import { spacing } from '@mui/system';


function App() {
  return (
<Container className="cust-container" fixed sx={{backgroundImage: `url(${logo})`,height: "100vh",width:"auto", backgroundSize: 'cover',backgroundPosition: 'center',}}>
<Grid container className='cust-first-grid' spacing={3}>
  <Grid className='cust-hader-grid child-grid-1' grid xs>
    <Grid xs={2}><img className='cust-header-logo' src={headerlogo}/></Grid>
  </Grid>
  <Grid className='cust-hader-grid child-grid-2' grid xs={6}>
    <Grid><ButtonGroup variant="text" className="cust-menu-link-group" aria-label="text button group">
    <Button>Explore</Button>
    <Button>Community</Button>
    <Button>More</Button>
  </ButtonGroup></Grid>
  </Grid>
  <Grid className='cust-hader-grid child-grid-3' grid xs={2}>
    <Grid><Button variant="contained" size="large">Start</Button></Grid>
  </Grid>
</Grid>


<Grid container className='cust-second-grid' spacing={2}>
  <Grid className='cust-hader-grid child-grid2-1' grid xs>
    <Grid xs={7}></Grid>
  </Grid>
  <Grid className='cust-hader-grid child-grid2-2' grid xs={5}>
    <Grid><span className='banner-heading'>Welcome to <span className='second-heading'>SpaceBudz</span></span></Grid>
    <Grid><span className='banner-subline'>Let's go on an adventure, where will your SpaceBudz take you?</span></Grid>
    <Grid><Button variant="contained" size="large">Explore ➜</Button></Grid>
  </Grid>
</Grid>
</Container>
);
}

export default App;