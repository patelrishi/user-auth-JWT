import React from "react";

import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { logout } from "../actions/userAction";
import UploadScreen from "./UploadScreen";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {userInfo ? (
              <Typography
                component="h6"
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Welcome {userInfo.fname} to Authentication app
              </Typography>
            ) : (
              <Typography
                component="h6"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Welcome to Authentication app
              </Typography>
            )}
            {userInfo ? (
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Thanks for using wanna try with another account?
                <UploadScreen />
              </Typography>
            ) : (
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                if you are Authenticated then your name will show up here...!
              </Typography>
            )}

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {userInfo ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={logoutHandler}
                    >
                      Log Out
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary">
                      <Link href="/login" color="inherit">
                        Sing Up
                      </Link>
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link href="/Register" color="inherit">
                      Register
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default HomeScreen;
