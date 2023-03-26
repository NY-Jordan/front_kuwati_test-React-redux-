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
import { useForm}  from 'react-hook-form'
import { LoginServie } from '../../../Redux/Services/UserService';
import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';



const theme = createTheme();

export default function FormLogin() {

  const {
    register,
    handleSubmit,
    formState : { errors }
  } = useForm({
    mode : "onTouched"
  })
  const dispatch  =  useDispatch()

  const Submit = async (data) => {
    
    const user = {
      username : data.required_email,
      password: data.required_password,
    };
    LoginServie(dispatch, user)

  };
  return (
    <Grid item xs={7} md={7} sm={12} sx={{ borderTopLeftRadius : "10px", borderBottomLeftRadius : "10px"  }} >
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'warning' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Se Connecter
            </Typography>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Box component="form" onSubmit={handleSubmit(Submit)} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                size="small"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register('required_email',  {
                    required : true
                })}
                />
                {errors.required_email && (
                    <small style={{ color : "red"}}>Veuillez remplir ce Champs</small>
                )}
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                size="small"
                autoComplete="current-password"
                {...register('required_password',  {
                    required : true
                })}
                />
                {errors.required_password && (
                    <small style={{ color : "red"}}>Veuillez remplir ce Champs</small>
                )}
                <Grid item xs>
                    <Button color='warning'   fontWeight="bold" href="/" component={Link}>
                        <Typography textTransform="lowercase">Mot de passe Oublié ?</Typography>
                    </Button>
                </Grid>
                <Button
                type="submit"
                fullWidth
                color="warning"
                onClick={() => handleSubmit(Submit)}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Se connecter
                </Button>
                <Grid container>
                
                
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    </Grid>
  );
}