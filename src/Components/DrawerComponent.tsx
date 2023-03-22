import { AccountCircle, ChevronLeft, ChevronRight, MenuBook, PhoneAndroid } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, Drawer, FormControl, IconButton, InputAdornment, Link, List, ListItem, ListItemText, TextField } from '@mui/material';
import * as React from 'react';


 const DrawerComponent  = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const OffDrawer = () => {
        setOpenDrawer(false)
    }
 
  return (
    <>
      <Drawer
        open={openDrawer}
        sx={{ width: "255px" }}
        onClose={() => setOpenDrawer(false)}
      >
        <IconButton onClick={() =>  setOpenDrawer(!openDrawer)}>
            <ChevronLeft />
          </IconButton>
          <Divider />
        <List>
         <ListItem>
            <ListItemText>
                <Button color="inherit">Menu</Button>
            </ListItemText>
          </ListItem>
          <ListItem >
            <ListItemText>
                <Button color="inherit">Dishes</Button>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
                <Button color="inherit">Profile</Button>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
                <Button color="inherit">Logout</Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      
    </>
  );
}

export default DrawerComponent