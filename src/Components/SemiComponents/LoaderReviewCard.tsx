import { Grid } from '@mui/material';
import * as React from 'react';
import SkelletonCard from './SkelletonCard';



export default function LoaderReviewCard() {
    return (
        <>
            <Grid item >
            <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
            <Grid item >
                <SkelletonCard />
            </Grid>
        </>

    );
}