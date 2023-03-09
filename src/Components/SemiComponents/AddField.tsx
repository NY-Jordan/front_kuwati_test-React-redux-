import { AccountCircle, PhoneAndroid } from '@mui/icons-material';
import { Box, FormControl, InputAdornment, TextField } from '@mui/material';
import * as React from 'react';


 const AddField  = () => {

 return (
    <Box>
            <FormControl sx={{ display : "flex", marginBottom : '30px'}}>
                <TextField
                    sx={{marginBottom : "5px"}}
                    id="input-with-icon-textfield"
                    label="Name"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
                <TextField
                    sx={{marginBottom : "5px"}}
                    id="input-with-icon-textfield"
                    label="Phone"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PhoneAndroid />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
            </FormControl>
        </Box>
  );
}

export default AddField