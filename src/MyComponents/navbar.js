import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import headerlogo from '../src/header-logo.svg';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Typography><img className='cust-header-logo' src={headerlogo}/></Typography>
        </Toolbar>
    </AppBar>
  )
}
