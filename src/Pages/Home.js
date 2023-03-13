import { LocalDining } from '@mui/icons-material';
import { Box,  Container, Grid, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import LoaderReviewCard from '../Components/SemiComponents/LoaderReviewCard';
import MenuReviewCard from '../Components/SemiComponents/MenuReviewCard';
import { getMenuOfDayService, getMenuService } from '../Redux/Services/MenuService';


function Home() {
  const dispatch  = useDispatch();
  const MenuDay = React.useMemo (() =>getMenuOfDayService(dispatch), [dispatch])
  const Menu = React.useMemo (() =>getMenuService(dispatch), [dispatch])



  const MenuState = useSelector(state => state.menu);
  const MenuOfDayState = useSelector(state => state.menuofday);
  const menus = MenuState.menu
  const menusOfDay = MenuOfDayState.menu
  
const URL= "http://localhost:8000/images/dishes/";

  return (
      <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
        <Box>
          <Navigation />
        </Box>
        
          <Box sx={{ marginTop : "20px" }}>
            <Typography variant='h5'>Les Menus du jour</Typography>
            <ImageList
              sx={{
                gridAutoFlow: "column",
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
                gridAutoColumns: "minmax(300px, 1fr)"
              }}
            >
              {menusOfDay ? menusOfDay.map((item) => (
                <Link href="#">
                  <ImageListItem>
                  <img alt="food card" src={URL + item.image}  style={{ with : "100px", height : "150px"}} />
                  <ImageListItemBar title={item.name} />
                </ImageListItem>
                </Link>
              )) : <LocalDining />}
            </ImageList>

          </Box>
          <Box marginTop="20px">
              <Box>
                <Typography variant='h5'>Nos différents Plats</Typography> 
              </Box>
              <Stack>
                <Grid container 
                alignItems="center"
                justifyContent="center"
                >
                  {menus ? menus.map((menu, key) =>  <MenuReviewCard 
                    key={key}
                    title={menu.name}
                    description={menu.description}
                    image={menu.image}
                    price={menu.price}

                  /> ) : <LoaderReviewCard /> }
                </Grid>
              </Stack>
          </Box>
          
      </Box>
   );
}


export default Home;
