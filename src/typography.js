import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    login_button_main: {
      margin: theme.spacing(3),
      backgroundColor: theme.palette.info.main,
    }, 
    reg_button_main: {
      margin: theme.spacing(3), 
      backgroundColor: theme.palette.warning.light,
    },
    home_button: {
      margin: theme.spacing(1, 0, 2), 
      backgroundColor: theme.palette.error.light,
    }
}));

export { useStyles };