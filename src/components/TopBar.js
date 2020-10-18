import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Button: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  const signUpPage = () => {
    history.push("./signup");
  };

  const signInPage = () => {
    history.push("./signin");
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="sticky" color="inherit">
        <Container maxWidth="md" className={classes.container}>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              color="textPrimary"
            >
              Todid List
            </Typography>
            <Button
              className={classes.Button}
              variant="outlined"
              color="inherit"
              onClick={signUpPage}
            >
              Sign Up
            </Button>{" "}
            |
            <Button
              className={classes.Button}
              variant="contained"
              color="secondary"
              onClick={signInPage}
            >
              Sign In
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
