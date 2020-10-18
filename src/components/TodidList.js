import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TodidItem from "./TodidItem";
import AddItemForm from "./AddItemForm";
import TodidCategory from "./TodidCategory";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
  },
}));

const todidits = [
  { text: "Swam with penguins", id: 1, iterations: 1 },
  { text: "Fought a bear", id: 2, iterations: 1 },
  { text: "Touched my toes", id: 3, iterations: 2 },
  { text: "Finished the pizza crust", id: 4, iterations: 2 },
  { text: "Ate spaghetti", id: 5, iterations: 5 },
];

export default function TodidList(props) {
  const classes = useStyles();

  const todidItems = [];
  let iterationCategory = null;

  todidits.forEach((todidit) => {
    if (todidit.iterations !== iterationCategory) {
      todidItems.push(<TodidCategory iterations={todidit.iterations} />);
    }
    todidItems.push(<TodidItem text={todidit.text} />);
    iterationCategory = todidit.iterations;
  });

  return (
    <Container component="div" maxWidth="sm">
      <Paper variant="outlined" className={classes.paper}>
        <Typography component="h1" variant="h2">
          Todid List
        </Typography>
        <AddItemForm />
        {todidItems}
      </Paper>
    </Container>
  );
}
