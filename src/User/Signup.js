import React, { Fragment, useState } from 'react';
import { signUpFetch } from '../auth';
import ShowError from '../helpers/showError';
import Menu from '../core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// // import Menu from '../core/Menu'

const Signup = () => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        error: '',
        success: ''
    });
    const { email, name, password, error,success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signUpFetch({ name, email, password })
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                    setValues({ ...values, error: data.error, success: false });
                }
                else {
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        success: true,
                        error: false
                    })
                }
            })
    }

    function showSuccess(success) {
        return <div className="alert alert-info mt-2" style={{ display: success ? '' : 'none' }}>
            <h3>registeration succesful!!please login!</h3>
        </div>
    }
//     const signUpForm = () => (
//         <form className="form-group">
//             <div>
//                 <label className="text-muted font-weight-bold">Enter Email:</label>
//                 <input type="email" value={email} onChange={handleChange('email')} className="form-control my-2 border-700" />
//             </div>
//             <div>
//                 <label className="text-muted font-weight-bold">Enter Name:</label>
//                 <input type="name" value={name} onChange={handleChange('name')} className="form-control my-2 border-700" />
//             </div>
//             <div>
//                 <label className="text-muted font-weight-bold">Enter password:</label>
//                 <input type="password" value={password} onChange={handleChange('password')} className="form-control my-2 border-700" />
//             </div>
//             <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>Sign up</button>
//         </form>
//     );

//     return (
//         <div>
//             {/* <Layout title="sign up" description="Signup using mail and password" className="container col-md-8 my-4 offset-md-2">
//                 {showSuccess(success)}
//                 <ShowError error={error} />
//                 {signUpForm()}
//             </Layout> */}
//             <FormPage />

//         </div>
//     )
// }



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

  return (
      <Fragment>
        <Menu />

    <Container component="main" maxWidth="xs" className="bg-dark" style={{borderRadius: "10px"}}>
        <ShowError error={error} />
        {showSuccess(success)}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color:"white"}}>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} className="bg-white m-2" style={{borderRadius:"10px"}}>
              <TextField
            //   className="bg-white"
                // autoComplete="fname"
                // name="firstName"
                value={name}
                onChange={handleChange('name')}
                variant="outlined"
                type="name"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} className="bg-white m-2" style={{borderRadius:"10px"}}>
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
            <Grid item xs={12} className="bg-white m-2" style={{borderRadius:"10px"}}>
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item className="m-2">
              <Link href="/signin"  style={{color:"white"}} variant="body2" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
    </Fragment>
  );
}

export default Signup
