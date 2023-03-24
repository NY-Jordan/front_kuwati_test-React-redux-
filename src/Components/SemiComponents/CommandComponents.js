import * as React from 'react';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, FormLabel,Box, Grid, Radio, RadioGroup, Typography, CircularProgress, Divider, Stack, DialogActions } from '@mui/material';
import AddField from './AddField';
import CardCommandDishes from './CardCommandDishes';
import DialogCommand from './DialogCommand';
import { useSelector } from 'react-redux';

 const CommandComponents = () => {
  const commandState = useSelector(state => state.command);
  const command = commandState.command;
  const base_url_dishes = process.env.REACT_APP_IMAGE_URL_DISHES_API ;
  const base_url_drink = process.env.REACT_APP_IMAGE_URL_DRINKS_API ;
  const [open, setOpen] = React.useState(false);
    const ChildDialog = () => {
        return(
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Annuler</Button>
            <Button onClick={() => setOpen(false)}>Continuer</Button>
          </DialogActions>
        );
      }
  return(
    <Grid item  xs={3} md={3} sx={{ backgroundColor : "white", padding : "5px" }} >
             <Box sx={{ position : "fixed", overflowY : "scroll", overflowX : "hidden",  top: "4em", bottom:2, width : "25%" }}>
             <Box>
               <Typography paragraph sx={{ fontSize : "30px", fontWeight : "bold", marginTop : "40px" }}>Ma commande</Typography>
             </Box>
             
             <Box marginBottom={"50px"}>
               {command.dishes.length || command.drinks.length > 0 ? 
                 <>
                     {
                      command.dishes.length > 0 ? 
                        <Box sx={{ backgroundColor  : "#f1f1f1", margin :"10px", padding : "2px"}}>
                          <Typography margin={"5px"} fontWeight={"bold"} fontSize={"20px"}>Mes plats</Typography>
                          {
                            command.dishes.map((dishes, key) => <CardCommandDishes 
                            title={dishes.title} 
                            price={dishes.price} 
                            image={base_url_dishes + dishes.image} 
                            part={dishes.part}
                            id = {dishes.id}
                            key={key}
                              />)
                        }
                        </Box> : ""
                     }
                  {
                    command.drinks.length > 0 ?
                    <Box sx={{ backgroundColor  : "#f1f1f1", margin :"10px"}}>
                      <Typography margin={"5px"} fontWeight={"bold"} fontSize={"20px"}>Mes Boissons</Typography>
                      {
                        command.drinks.map((dishes, key) => <CardCommandDishes 
                        title={dishes.title} 
                        price={dishes.price} 
                        image={base_url_drink + dishes.image} 
                        part={dishes.part}
                        id = {dishes.id}
                        key={key}
                          />)
                      }
                  </Box> : ""
                  }
                 </>
                 
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
  );
}

export default CommandComponents
