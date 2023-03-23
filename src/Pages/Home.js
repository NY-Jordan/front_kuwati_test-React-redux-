import { Search } from '@mui/icons-material';
import { Box,  Button,  Container, DialogActions, Divider, Grid, Input, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error400 from '../Components/Errors/Error400';
import Navigation from '../Components/Navigation';
import CardCommandDishes from '../Components/SemiComponents/CardCommandDishes';
import DialogCommand from '../Components/SemiComponents/DialogCommand';
import LoaderReviewCard from '../Components/SemiComponents/LoaderReviewCard';
import ReviewCardNew from '../Components/SemiComponents/ReviewCardNew';
import { getMenuOfDayService, getMenuService } from '../Redux/Services/MenuService';


function Home() {
  const dispatch  = useDispatch();
  const [open, setOpen] = React.useState(false);
  const MenuDay = React.useMemo (() =>getMenuOfDayService(dispatch), [dispatch])
  const Menu = React.useMemo (() =>getMenuService(dispatch), [dispatch])
  const MenuState = useSelector(state => state.menu);
  const MenuDaysState = useSelector(state => state.menuofday);
  const URL= process.env.BASE_IMAGE_URL_DISHES_API;
  const commandState = useSelector(state => state.command);
  const command = commandState.command;
  const ChildDialog = () => {
    return(
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Annuler</Button>
        <Button onClick={() => setOpen(false)}>Continuer</Button>
      </DialogActions>
    );
  }
  return (
      <>
      <Box>
        <Navigation />
      </Box>
      <Divider />
      <Box sx={{  marginRight: "10px",  marginTop: "60px" }}>
        
        {
          MenuState.error ?
          <>
          <Error400 />
          </>
          : 
         <>
          <Grid container direction={"row"} >
              <Grid item xs={9}  md={9} sx={{ backgroundColor : "#f1f1f1" }}>
                <Box marginTop="20px">
                  <Box marginBottom={"50px"}>
                    <Typography variant='h5' align={"center"} sx={{ fontWeight : "bold", marginBottom : "30px" }}>Passez vos commandes facilement...</Typography> 
                    <Container>
                      <Grid  container sx={{  marginRight: "50px", marginLeft: "50px" }} spacing={8}>
                        <Grid item md={6} xs={6}>
                          <Typography paragraph>Mots-Clés : </Typography>
                          <Box>
                            <Button variant="outlined" sx={{ marginRight : "5px" }}  size="small">Plats du jours</Button>
                            <Button variant="outlined" sx={{ marginRight : "5px" }}  size="small">Entrer</Button>
                            <Button variant="outlined" sx={{ marginRight : "5px" }}   size="small">Desert</Button>
                            <Button variant="outlined" sx={{ marginRight : "5px" }}   size="small">Resistance</Button>
                          </Box>

                        </Grid>
                        <Grid item md={6} xs={6}>
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
             
              <Grid item  xs={3} md={3} sx={{ backgroundColor : "white", padding : "5px" }} >
                <Box sx={{ position : "fixed", overflowY : "scroll", overflowX : "hidden",  top: "4em", bottom:2, width : "25%" }}>
                <Box>
                  <Typography paragraph sx={{ fontSize : "30px", fontWeight : "bold" }}>Ma commande</Typography>
                </Box>
                <Stack direction="row" spacing={8} >
                  <Stack direction="row" sx={{ backgroundColor : "#cf1f2a", borderRadius : "100px", padding : "2px", color: "white", width : "40%", borderStyle: "ridge"}}>
                    <Box sx={{  }}>Plats</Box>
                    <Box >{command.length}</Box>
                  </Stack>
                  <Stack direction="row" sx={{ backgroundColor : "#cf1f2a", borderRadius : "100px", padding : "2px", color: "white", width : "40%" }}>
                    <Box>Boisson</Box>
                    <Box>00</Box>
                  </Stack>
                </Stack>
                <Box marginBottom={"50px"}>
                  {command.length > 0 ? 
                    command.map((dishes, key) => <CardCommandDishes 
                      title={dishes.title} 
                      price={dishes.price} 
                      image={dishes.image} 
                      part={dishes.part}
                      id = {dishes.id}
                        />)
                  : <Typography  marginTop={"30px"} align={"center"}>Votre commande est vide...</Typography>}
                </Box>
                <Box sx={{ fontSize : "20px", marginBottom : "5px" }}>
                  Total : {commandState.totalPrice} Fcfa
                </Box>
                <Button variant="contained" disabled={command.length <= 0} onClick={() => setOpen(true)} color="warning" fullWidth >
                   Valider la commande
                </Button>
                <DialogCommand open={open}  >
                  <ChildDialog />
                </DialogCommand>
                </Box>
              </Grid>
            </Grid>
         </>
       }

      </Box>
      </>
   );
}


export default Home;
