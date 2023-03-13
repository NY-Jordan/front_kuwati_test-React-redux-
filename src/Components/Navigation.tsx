import { Block, FoodBankRounded } from '@mui/icons-material';
import { AppBar, Button, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import DrawerComponent from './DrawerComponent';


function Navigation() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
   <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label='logo'>
                <FoodBankRounded fontSize='large' />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Kutiwa-Restaurant
            </Typography>
            {isMobile ? (
          <DrawerComponent />
        ) : (
            <Stack direction="row" spacing={2}>
            <Button color="inherit">Menu</Button>
            <Button color="inherit">Dishes</Button>
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Logout</Button>
        </Stack>
        )}
            
        </Toolbar>
   </AppBar>
  );
}

export default Navigation;
