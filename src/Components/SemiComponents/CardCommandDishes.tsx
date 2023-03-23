import { Delete } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeDishesToCommandAction } from '../../Redux/Actions/CommandActions';

type props = {
    title : string,
    image : string,
    price : number,
    part : number,
    id : number,
}

const CardCommandDishes : React.FC<props> = ({title, image, price , part, id}) => {
    const URL_IMAGE = process.env.REACT_APP_IMAGE_URL_DISHES_API;
    const dispacth = useDispatch()
    const remove = () => {
        dispacth(removeDishesToCommandAction(id, price));
    }
    return (
      <Box sx={{ marginBottom : "25px", marginTop : "25px" }}>
        <Grid container direction={"row"}>
            <Grid item md={4}>
                <Avatar  sx={{     height: "100px", width: "100px" }} aria-label="recipe">
                    <img src={URL_IMAGE+image} style={{ borderRadius : "100px", height : "100px" }} alt="Logo" />;
                </Avatar>
            </Grid>
            <Grid item direction={"column"} md={6}>
                <Typography sx={{ fontWeight : "bold" }}>{title}</Typography>
                <Typography>{price} Fcfa pour {part} Plats</Typography>
                <Typography></Typography>
            </Grid>
            <Grid item md={2}>
                <Button onClick={()=> remove()}>
                    <Delete></Delete>
                </Button>
            </Grid>
            <hr />
        </Grid>
      </Box>
      
   );
}


export default CardCommandDishes;
