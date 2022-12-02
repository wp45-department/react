import React,{useState} from 'react';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
// import {Button} from '@mui/material';
import {Button} from '@mui/material/'

function App() {
  const [color,setColor]=useState("secondary")
  const [disbtn,setdisbtn]=useState(false)
  function customMe(){
    // alert("Function called")
    // setColor("primary")
    setdisbtn(true)
  }
  return (
<div>
<Header title={"Prem Dudhrejiya"} searchbar={true}/>
<Todos/>
<Footer/>
<h1>React MUI</h1>
<Button color={color} disabled={disbtn} variant="contained" onClick={() => {customMe()}} >Click Me</Button>

</div>
  );
}

export default App;