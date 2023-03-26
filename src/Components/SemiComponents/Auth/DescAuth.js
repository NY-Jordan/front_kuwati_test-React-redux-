import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Link, Typography } from '@mui/material';



export default function DescAuth() {
  

  
  return (
    <Grid item xs={5} bgcolor="#d0073b" sx={{ borderTopLeftRadius : "10px", borderBottomLeftRadius : "10px"  }}
    boxShadow={3} color='white' padding={"10px"}>
      <Box marginBottom={"40px"}>
        <Typography fontWeight={"bold"} align="center" fontSize="30px">Kutiwa-Restaurant</Typography>
      </Box>
      <Box>
        <Typography paragraph  fontSize="15px" marginBottom={"80px"}>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. 
        </Typography>
      </Box>
      <Box marginBottom={"40px"} align="center">
          {"Vous n'avez pas de compte ? "}
        <Button color='warning'   fontWeight="bold" href="/" component={Link}>
            <Typography textTransform="capitalize">S'inscrire</Typography>
        </Button>
      </Box>
      
    </Grid>
  );
}