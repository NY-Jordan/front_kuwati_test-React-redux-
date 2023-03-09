import { Box, Skeleton} from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';


function SkelletonCard() {
  return (
    <Box margin="30px">
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="text" width={210} height={100}/>

        <Skeleton variant="rounded" width={210} height={60} />
    </Box>
  )
}

export default SkelletonCard;
