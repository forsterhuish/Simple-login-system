import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useStyles } from './typography';

import ReactDOM from 'react-dom';
import SignUp from './register';
import Successful_Login from './submit_login'
import App from './App';

export default function SignIn_Form() {
    const classes = useStyles();

    return (
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              ReactDOM.render(
                <React.StrictMode>
                  <Successful_Login />
                </React.StrictMode>,
                document.getElementById('root')
              );
            }}
          >
            Login
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
                <Link component="button" variant="body2" 
                    onClick={() => { 
                        ReactDOM.render(
                            <React.StrictMode>
                              <SignUp />
                            </React.StrictMode>,
                            document.getElementById('root')
                        );
                    } }
                >
                  Don't have an account? Register
              </Link>
            </Grid>
          </Grid>
        </form>
    );
}
