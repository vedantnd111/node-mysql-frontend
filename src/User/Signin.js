import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signInFetch } from '../auth';
import Menu from '../core/Menu';
import ShowError from '../helpers/showError';
import ShowLoading from '../helpers/ShowLoading';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, error, loading, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = event => {
        event.preventDefault();
        signInFetch({ email, password })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                    setValues({ ...values, error: data.error, loading: false });
                }
                else {
                    authenticate(data, () => {
                        setValues({ ...values, redirectToReferrer: true });
                    })
                }
            })
    }
    const redirectTo = () => {
        if (redirectToReferrer) {
            return <Redirect to="/" />
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }

    };

    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

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
      }));

      // export default function SignUp() {
  const classes = useStyles();

    // const signinForm = () => (
    //     <form className="form-group">
    //         <div>
    //             <label className="text-muted font-weight-bold">Enter email:</label>
    //             <input type="email" value={email} onChange={handleChange('email')} className="form-control" />
    //         </div>
    //         <div>
    //             <label className="text-muted font-weight-bold">Enter password:</label>
    //             <input type="password" value={password} onChange={handleChange('password')} className="form-control" />
    //         </div>
    //         <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>signin</button>
    //     </form>
    // );

    const signInForm=()=>(
        <Container component="main" maxWidth="xs">
            <ShowError error={error} />
                <ShowLoading loading={loading} />
        <ShowError error={error} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange('email')}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handleChange('password')}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickSubmit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2" >
                Do not have an account ? register here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
 
    );

  

    return (
        <div className="container-md">
            <Menu />
                {redirectTo()}
                {signInForm()}
        </div>
    )
}

export default Signin
