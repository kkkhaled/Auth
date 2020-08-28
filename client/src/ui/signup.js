import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import Container from "@material-ui/core/Container";

import AuthContext from "../contexts/auth/authContext";
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
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [alertData, setAlertData] = useState({ open: false });
  const { register, error, clearErrors } = authContext;

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error !== null) {
      setAlertData({
        open: true,
        message: " User Already Existed!",
        type: "error",
      });
      clearErrors();
    }
    console.log(error);
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.match("[A-Za-z0-9_.-]+")) {
      setAlertData({
        open: true,
        message: " Name is Empty!",
        type: "error",
      });
      console.log(alertData);
    } else if (!password.match("[A-Za-z0-9_.-]+")) {
      setAlertData({
        open: true,
        message: " Name is Empty!",
        type: "error",
      });
      console.log(alertData);
    } else if (!email.match("[A-Za-z0-9_.-]+")) {
      setAlertData({
        open: true,
        message: " Email is Empty!",
        type: "error",
      });
      console.log(alertData);
    } else if (!password2.match("[A-Za-z0-9_.-]+")) {
      setAlertData({
        open: true,
        message: " repassword is Empty!",
        type: "error",
      });
      console.log(alertData);
    } else {
      register({ name, email, password });
      if (error !== null) {
        console.log(error);
      } else {
        setAlertData({
          open: true,
          message: " user created",
          type: "success",
        });
        console.log(alertData);
        console.log(user);
        console.log(error);
      }
    }
    console.log("Done");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {alertData.open ? (
          <Alert severity={alertData.type}>{alertData.message}</Alert>
        ) : null}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                name="name"
                value={name}
                onChange={onChange}
                fullWidth
                label=" Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                value={email}
                onChange={onChange}
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="re-Password"
                type="password"
                name="password2"
                value={password2}
                onChange={onChange}
                minLength="6"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
