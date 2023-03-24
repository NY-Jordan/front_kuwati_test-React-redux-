import { Box,useTheme, Divider, Grid,  useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Error400 from '../Components/Errors/Error400';
import Navigation from '../Components/Navigation';
import CommandComponents from '../Components/SemiComponents/CommandComponents';

function Layouts({children}) {
  const MenuState = useSelector(state => state.menu);
  const DrinksState = useSelector(state => state.drinks);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  

  
  return (
      <>
      <Box>
        <Navigation />
      </Box>
      <Divider />
      <Box sx={{  marginRight: "10px",  marginTop: "60px" }}>
        
        {
          MenuState.error || DrinksState.error ?
          <>
          <Error400 />
          </>
          : 
         <>
          <Grid container direction={"row"} spacing={2} >
              {children}
             {isMobile === false ?  
               <CommandComponents />
              : <></> }
              
            </Grid>
         </>
       }

      </Box>
      </>
   );
}


export default Layouts;
