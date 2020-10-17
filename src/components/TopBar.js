import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
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
