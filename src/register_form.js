import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { useStyles } from './typography';
import SignIn from './login';
import ReactDOM from 'react-dom';
import App from './App';
import Submit_registration from './submit_registration';

export default function SignIn_Form() {
  const classes = useStyles();

  const [state, setState] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "",
  });

  const handleChange = (e) => {
    const {id, value} = e.target; 
    setState(prevState => ({
      ...prevState, 
      [id]: value
    }))
  }

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={state.firstName}
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={state.lastName}
            autoComplete="lname"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="email"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={state.email}
            autoComplete="email"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            value={state.password}
            autoComplete="current-password"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => {
          ReactDOM.render(
            <React.StrictMode>
              <Submit_registration />
            </React.StrictMode>,
            document.getElementById('root')
          );
        }}
      >
        Register
      </Button>
      <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.home_button}
          onClick={() => {
            ReactDOM.render(
              <React.StrictMode>
                <App />
              </React.StrictMode>,
              document.getElementById('root')
            );
          }}
        >
          Home
        </Button>
      <Grid container>
        <Grid item>
            <Link component="button" variant="body2"
                onclick={(e) => {
                    ReactDOM.render(
                        <React.StrictMode>
                          <SignIn />
                        </React.StrictMode>,
                        document.getElementById('root')
                    );
                }}
            >
            Already have an account? Login
          </Link> 
        </Grid>
      </Grid>
    </form>
  );
}
