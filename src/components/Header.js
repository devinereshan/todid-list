import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TopBar from "./TopBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 10px",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  catchPhrase: {
    fontSize: "1.4em",
    fontStyle: "oblique",
  },
  catchPhraseBeginning: {
    marginLeft: "-20vw",
  },
  catchPhraseEnding: {
    marginLeft: "20vw",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <Box>
      <TopBar />
      <Container maxWidth="md" className={classes.container}>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className={classes.catchPhraseBeginning}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.catchPhrase}
            >
              It's not what you do,
            </Typography>
          </div>
          <div className={classes.catchPhraseEnding}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.catchPhrase}
            >
              it's what you did...
            </Typography>
          </div>
        </Grid>
      </Container>
    </Box>
  );
}
