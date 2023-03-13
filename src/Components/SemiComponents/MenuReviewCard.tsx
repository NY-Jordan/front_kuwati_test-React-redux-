import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button, DialogActions, DialogProps, Grid, Menu, MenuItem } from '@mui/material';
import DialogCommand from './DialogCommand';

type props = {
  title : string,
  description : string,
  image : string,
  created_at : Date,
  price : number
  
}




const URL_IMAGE = "http://localhost:8000/images/dishes/";


const MenuReviewCard : React.FC<props> = ({title, description, image, price }) =>  {


  const subs_description = description.substring(0,250);
  const [open, setOpen] = React.useState(false);
  const handleclose =() => {
    setOpen(false)
  }
  
  const ChildDialog = () => {
    return(
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Annulé</Button>
        <Button onClick={() => setOpen(false)}>Payer</Button>
      </DialogActions>
    );
  }
  return (
    <Grid item sx={{ maxWidth: 350, minHeight : 250}} className="cardMenu">
        <Card sx={{ maxWidth: 350, margin : "20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              KTW
            </Avatar>
          }
          action={
            <Typography>{price} Fcfa</Typography>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={URL_IMAGE + image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html : subs_description }} />
          <Typography >
            {description.length > 200 ? <Button variant='text'>...View More</Button> : ""}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          
          <Button variant="outlined" onClick={() => setOpen(true)}>Commander</Button>
          <DialogCommand open={open}    title={title} price={price} >
            <ChildDialog />
          </DialogCommand>           
        </CardActions>
        </Card>
    </Grid>
  );
}

export default MenuReviewCard;