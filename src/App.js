import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ReactDOM from 'react-dom';
import Login from './login';
import Register from './register';
import { useStyles } from './typography';

export default function HomePage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <InfoIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Simple Login/Register System
          </Typography>
      </div>

      <Grid container spacing={4} justify="center">
        <Grid item>
          <Button variant="contained" color="primary" className={classes.login_button_main}
            onClick={() => {
              ReactDOM.render(
                <React.StrictMode>
                  <Login />
                </React.StrictMode>,
                document.getElementById('root')
              );
            }}
          >
            Login
          </Button>
          <Button variant="contained" color="primary" className={classes.reg_button_main}
            onClick={() => {
              ReactDOM.render(
                <React.StrictMode>
                  <Register />
                </React.StrictMode>,
                document.getElementById('root')
              );
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}