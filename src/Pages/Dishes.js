import { Search } from '@mui/icons-material';
import { Box,  Button,  Container, DialogActions,useTheme, Divider, Grid, Input, InputAdornment, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error400 from '../Components/Errors/Error400';
import Navigation from '../Components/Navigation';
import CardCommandDishes from '../Components/SemiComponents/CardCommandDishes';
import CommandComponents from '../Components/SemiComponents/CommandComponents';
import DialogCommand from '../Components/SemiComponents/DialogCommand';
import DrawerCommand from '../Components/SemiComponents/DrawerCommand';
import LoaderReviewCard from '../Components/SemiComponents/LoaderReviewCard';
import ReviewCardNew from '../Components/SemiComponents/ReviewCardNew';
import { getMenuOfDayService, getMenuService } from '../Redux/Services/MenuService';
import Layouts from './Layouts';


function Dishes() {
  const dispatch  = useDispatch();
  const Menu = React.useMemo (() =>getMenuService(dispatch), [dispatch])
  const MenuState = useSelector(state => state.menu);
  const MenuDaysState = useSelector(state => state.menuofday);
  const URL= process.env.BASE_IMAGE_URL_DISHES_API;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  

  
  return (
     <Layouts>
              <Grid item xs={12}  md={9} sm={12} sx={{ backgroundColor : "#f1f1f1", overflowX : "hidden" }}>
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
                      justifyContent="center"
                    >
                      {MenuState.menu ? MenuState.menu.map((menu, key) =>  <ReviewCardNew 
                      key={key}
                      title={menu.name}
                      description={menu.description}
                      image={menu.image}
                      price={menu.price}
                      id={menu["@id"]}
                       /> ) : <LoaderReviewCard /> }
                  
                    </Grid>
                 </Stack>
                  </Container>
                </Box>
              </Grid>
             
    </Layouts>
   );
}


export default Dishes;
