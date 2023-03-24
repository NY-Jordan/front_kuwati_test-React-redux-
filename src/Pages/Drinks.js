import { Search } from '@mui/icons-material';
import { Box,  Button,  Container,useTheme, Grid, Input, InputAdornment, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderReviewCard from '../Components/SemiComponents/LoaderReviewCard';
import ReviewCardDrinks from '../Components/SemiComponents/ReviewCardDrinks';
import ReviewCardNew from '../Components/SemiComponents/ReviewCardNew';
import { getDrinksService } from '../Redux/Services/DrinksService';
import Layouts from './Layouts';


function Drinks() {
  const dispatch  = useDispatch();
  const drinks = React.useMemo (() =>getDrinksService(dispatch), [dispatch])
  const DrinksState = useSelector(state => state.drinks);
  console.log(DrinksState);
  

  
  return (
     <Layouts>
              <Grid item xs={9}  md={9} sm={12} sx={{ backgroundColor : "#f1f1f1", overflowX : "hidden" }}>
                <Box marginTop="20px">
                  <Box marginBottom={"50px"}>
                    <Typography variant='h5' align={"center"} sx={{ fontWeight : "bold", marginBottom : "30px" }}>Passez vos commandes facilement...</Typography> 
                    <Container>
                      <Grid  container sx={{  marginRight: "50px", marginLeft: "50px" }} spacing={8}>
                        <Grid item md={6} xs={6} sm={3}>
                          <Typography paragraph>Mots-Clés : </Typography>
                          <Box>
                            <Button variant="outlined" sx={{ margin : "5px" }}  size="small">Plats du jours</Button>
                            <Button variant="outlined" sx={{ margin : "5px" }}  size="small">Entrer</Button>
                            <Button variant="outlined" sx={{ margin : "5px" }}   size="small">Desert</Button>
                            <Button variant="outlined" sx={{ margin : "5px" }}   size="small">Resistance</Button>
                          </Box>

                        </Grid>
                        <Grid item md={6} xs={6}  sm={3}>
                          <Typography paragraph>Recherche</Typography>
                          <Box>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                            <InputAdornment position="start">
                              <Search />
                            </InputAdornment>
                             }
                           />
                          </Box>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                  <Container sx={{  marginRight: "50px", marginLeft: "50px" }}>

                  <Stack>
                    <Grid container 
                      alignItems="center"
                      justifyContent="center" >
                      {DrinksState.drinks ? DrinksState.drinks.map((drinks, key) =>  <ReviewCardDrinks 
                      key={key}
                      title={drinks.name}
                      description={drinks.description}
                      image={drinks.image}
                      price={drinks.price}
                      id={drinks["@id"]}
                       /> ) : <LoaderReviewCard /> }
                  
                    </Grid>
                 </Stack>
                  </Container>
                </Box>
              </Grid>
             
    </Layouts>
   );
}


export default Drinks;
