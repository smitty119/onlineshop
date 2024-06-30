import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
   
        <Typography variant="h2" textAlign={'center'} fontFamily={'choco'} gutterBottom>
        SNAPDEALS
      </Typography>
     
    </AppBar>
  );
};

export default Navbar;
