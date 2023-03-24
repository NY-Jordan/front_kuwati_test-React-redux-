import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import DialogCommand from './DialogCommand';
import CardCommandDishes from './CardCommandDishes';
import { DialogActions, Grid, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function DrawerCommand({open, setOpen, window}) {

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const commandState = useSelector(state => state.command);
  const command = commandState.command;
  const base_url_dishes = process.env.REACT_APP_IMAGE_URL_DISHES_API ;
  const base_url_drink = process.env.REACT_APP_IMAGE_URL_DRINKS_API ;

  const [openD, setOpenD] = React.useState(false);
    const ChildDialog = () => {
        return(
          <DialogActions>
            <Button onClick={() => setOpenD(false)}>Annuler</Button>
            <Button onClick={() => setOpenD(false)}>Continuer</Button>
          </DialogActions>
        );
      }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'black' }}>Ma commande ({command.dishes.length || command.drinks.length > 0  ? (command.drinks.length + command.dishes.length ) : <>{'00'}</>})</Typography>
        </StyledBox>
        
             
             <Box sx={{ overflowY : "scroll", margin : "50px" }}>
             
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
             <Button variant="contained" marginBottom={'30px'} disabled={command.length <= 0} onClick={() => setOpenD(true)} color="warning" fullWidth >
                Valider la commande
             </Button>
             <DialogCommand open={openD}  >
               <ChildDialog />
             </DialogCommand>
             </Box>
      </SwipeableDrawer>
    </Root>
  );
}

DrawerCommand.propTypes = {
  
  window: PropTypes.func,
};

export default DrawerCommand;