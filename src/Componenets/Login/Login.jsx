import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextfieldWrapper from '../TextField';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Login() {

  const initialFormState = {
    username: "",
    // email: "",
    password: "",

  };


  const formValidation = Yup.object().shape({

    username: Yup.string()
      .min(3, '*Must be 3 characters long')
      .required('*Required'),

    // phone: Yup.string().required('*Required')
    // .matches(phoneRegExp, '*Phone number is not valid'),

    // email: Yup.string().email('Invalid email address').required('*Required'),

    // role: Yup.string()
    //   .ensure()
    //   .required("Role is required!!!!"),

    password: Yup.string()
      .min(8, '*Minimum 8 characters')
      .max(30, '*Must be 30 characters or less')
      .required('*Required'),

  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (


    <Container component="main" maxWidth="xs">
      <Formik
        initialValues={{ ...initialFormState }}
        validationSchema={formValidation}

        onSubmit={values => {
          console.log(values);


        }}

      >
        <Form >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>

              <TextfieldWrapper name='username' label='Username' />

              <TextfieldWrapper name='password' label="Password" />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Typography variant='overline'>Don't Have An Account ? <Link to='/register' style={{ textDecoration: "none" }}>Register</Link></Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Form>
      </Formik>
    </Container>
  )
}

export default Login