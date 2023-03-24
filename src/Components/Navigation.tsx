import {  BrunchDining, FoodBankRounded,  } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import DrawerCommand from './SemiComponents/DrawerCommand';


function  Navigation() {
    const navigate =   useNavigate();
    const  [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
   <AppBar position="fixed"  >
        <Toolbar color="transparent" className="navbar" sx={{ backgroundColor : "white", color : "black" }}>
            <IconButton size="large" edge="start" color="inherit" aria-label='logo'>
                <FoodBankRounded fontSize='large' />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Kutiwa-Restaurant

            </Typography>
            
            {isMobile ? (
               <>
                <Box marginRight={"30px"}>
                  <Button variant="contained" onClick={() => setOpen(true)} color="warning">Ma commande</Button>
                </Box>
                <DrawerCommand  open={open} setOpen={setOpen}/>
                <DrawerComponent />
               </>
        ) : (
            <Stack direction="row" spacing={2} >
                <Button color="inherit"  className="nav-btn" onClick={() => navigate('/')}>Dishes</Button>
                <Button color="inherit" className="nav-btn" onClick={() => navigate('/drinks')}>Beverage</Button>
                <Button color="inherit" className="nav-btn">Account</Button>
            </Stack>
        )}
            
        </Toolbar>
   </AppBar>
  );
}

export default Navigation;
