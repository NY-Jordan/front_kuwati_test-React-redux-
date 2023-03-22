import { Refresh } from '@mui/icons-material';
import { Button, Grid, ImageListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from "./../../Assets/Images/Errors/400.png";


function Error400() {
  return (
    <Grid 
    container
    direction="column"
    alignItems="center"
    justifyContent="center">
      <img alt="Bad request" style={{ height : "500px", }}  src={img} />
      <Button size="large" variant='outlined' onClick={() => window.location.reload()} endIcon={<Refresh />}>Refresh</Button>
    </Grid>
  );
}

export default Error400;
