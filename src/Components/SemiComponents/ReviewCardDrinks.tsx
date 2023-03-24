import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box, Button, DialogActions, DialogProps, Grid, Menu, MenuItem } from '@mui/material';
import DialogCommand from './DialogCommand';
import { Add, Remove } from '@mui/icons-material';
import {  AddDishesToCommandService, AddDrinksToCommandService } from '../../Redux/Services/CommandServices';
import { useDispatch } from 'react-redux';

type props = {
  title : string,
  description : string,
  image : string,
  created_at : Date,
  price : number, 
  id : string
  
}


const URL_IMAGE = process.env.REACT_APP_IMAGE_URL_DRINKS_API;
const ReviewCardDrinks : React.FC<props> = ({title, description, image, price, id }) =>  {

  const [part, setPart] = React.useState(1);
  const [Initial, setInitial] = React.useState(0)
  const [finalPrice, setFinalPrice] = React.useState(price);
  const dispatch = useDispatch()
  const addPart = () => {
      setPart(part + 1);
      setFinalPrice(finalPrice+price);
  }
  const removePart = () => {
    if(part > 1) {
        setPart(part - 1);
        setFinalPrice(finalPrice-price);
    }
  }
  
  

  const AddDrinks = () => {
    const dishes = {
      id : id,
      title : title,
      image : image ,
      price : finalPrice,
      part : part
    }
    AddDrinksToCommandService(dispatch, dishes)
  }
  
  return (
    <Grid item md={4} xs={4} sm={6} marginBottom={"20px"} >
        <Card sx={{ maxWidth: 250 }} className="cardMenu" >
      <CardMedia
        sx={{ height: 200 }}
        image={URL_IMAGE+image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom paragraph={true}  align={"center"} sx={{ fontSize : "15px", fontWeight : "bold" }} component="div">
          {title}
        </Typography>
        <Box>
           <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="outlined"  sx={{ borderColor : "#cf1f2a", color : "#cf1f2a"}} size="small" onClick={() => removePart()}   >
              <Remove />
            </Button>
             <Typography variant="h3"  sx={{ marginLeft : "10px",  marginRight : "10px", fontWeight : "bold" }} >{part}</Typography>
             <Button variant="outlined" size="small"  onClick={()=> addPart()} ><Add /></Button>
           </Grid>
           <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
               <Typography marginTop={"20px"} sx={{ fontStyle: 'italic' }}>{finalPrice} Fcfa {part > 1 ? "/"+part+" Parts" : ""}</Typography>
           </Grid>
           
        </Box>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" startIcon={<Add />}  color="warning" onClick={() => AddDrinks()}  fullWidth >ADD </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default ReviewCardDrinks;