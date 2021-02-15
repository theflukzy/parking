import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import auth from "../firebase";
import Grow from "@material-ui/core/Grow";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/aJGEVYOKE2Q)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

var check = true;
const SignInSide = ({ setSession }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const handleUsername = (user) => {
    setUsername(user.target.value);
  };
  const [error, setError] = useState(false);

  const [password, setPassword] = useState("");
  const handlePassword = (pass) => {
    setPassword(pass.target.value);
  };

  const handleLogin = async () => {
    // console.log("login", username,password)
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );
      const { user } = response;
      setSession({
        isLoggedIn: true,
        currentUser: user,
      });
    } catch (error) {
      setError(true);
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage,
      });
    }
    ///console.log('users', user)
  };
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && (
            <Grow in={error}>
              <Alert error={error} severity="error">
                username or password is wrong
              </Alert>
            </Grow>
          )}
          <form className={classes.form} noValidate>
            <TextField
              value={username}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              //name="emails"

              onChange={handleUsername}
            />
            <TextField
              value={password}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              onChange={handlePassword}
            
            />

            <FormControlLabel
              control={
                <Checkbox checked={check} value="remember" color="primary" />
              }
              label="Remember me"
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              
              
              // className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/add" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/check" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
