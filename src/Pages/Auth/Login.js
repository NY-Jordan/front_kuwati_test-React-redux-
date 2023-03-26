import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DescAuth from '../../Components/SemiComponents/Auth/DescAuth';
import FormLogin from '../../Components/SemiComponents/Auth/FormLogin';
import { Alert, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';



export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const UserState = useSelector(state => state.user)


  return (
    <>
      <Stack justifyContent={"center"} alignItems='center'> 
          <Grid container row marginTop={"100px"} 
            boxShadow={3}
            xs={8}
            >
            {!isMobile && <DescAuth />}
            <FormLogin />
          </Grid>
      </Stack>
    </>
  );
}