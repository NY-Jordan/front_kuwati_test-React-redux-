import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Skeleton, Stack} from '@mui/material';
import React from 'react';


function SkelletonCard() {
  return (
    <Grid item  sx={{ width: 250, height : "700px"}} >
      <Card sx={{ width: 350, margin : "20px" }} >
      <CardHeader
        avatar={
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
        }
        
        title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
        }
        subheader={
            <Skeleton animation="wave" height={10} width="40%" />
        }
      />
      <CardMedia>
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      </CardMedia>
      <CardContent>
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
      </CardContent>
      </Card>
    </Grid>
  )
}

export default SkelletonCard;
