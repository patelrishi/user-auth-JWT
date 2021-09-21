import React, { useState } from "react";

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

    background: "#f5f5f5",
    minHeight: "90vh",
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
  localStorage.getItem("userInfo");
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  useEffect(() => {
    if (userInfo) {
      setdata(userInfo);
    }
  }, [userInfo]);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {data ? (
              <Typography
                component="h6"
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Welcome {data.fname} to Authentication app
                <UploadScreen />
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

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {data ? (
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
