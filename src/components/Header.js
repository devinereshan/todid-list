import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import TopBar from "./TopBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: 10,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  catchPhrase: {
    fontSize: "1.4em",
    fontStyle: "oblique",
  },
  catchPhraseBeginning: {
    marginLeft: "-10vw",
  },
  catchPhraseEnding: {
    marginLeft: "10vw",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <Box className={classes.box}>
        <Container maxWidth="md" className={classes.container}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.catchPhrase}
          >
            <div className={classes.catchPhraseBeginning}>
              It's not what you do,
            </div>
            <div className={classes.catchPhraseEnding}>
              it's what you did...
            </div>
          </Typography>
        </Container>
      </Box>
    </>
  );
}
