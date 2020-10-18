import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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

const todidData = [
  { text: "Swam with penguins", id: 1, todiderations: 1 },
  { text: "Fought a bear", id: 2, todiderations: 1 },
  { text: "Touched my toes", id: 3, todiderations: 2 },
  { text: "Finished the pizza crust", id: 4, todiderations: 2 },
  { text: "Ate spaghetti", id: 5, todiderations: 5 },
];

export default function TodidList(props) {
  // filter and format the todidData for rendering
  const [todidOnce, setTodidOnce] = useState(() =>
    todidData
      .filter((todid) => todid.todiderations === 1)
      .map((todidit) => (
        <TodidItem
          text={`${todidit.text} ${todidit.id}`}
          key={"id_" + todidit.id}
        />
      ))
  );
  const [todidTwice, setTodidTwice] = useState(() =>
    todidData
      .filter((todid) => todid.todiderations === 2)
      .map((todidit) => (
        <TodidItem
          text={`${todidit.text} ${todidit.id}`}
          key={"id_" + todidit.id}
        />
      ))
  );
  const [todidFiveTimes, setTodidFiveTimes] = useState(() =>
    todidData
      .filter((todid) => todid.todiderations === 5)
      .map((todidit) => (
        <TodidItem
          text={`${todidit.text} ${todidit.id}`}
          key={"id_" + todidit.id}
        />
      ))
  );

  const classes = useStyles();

  function addTodid(newTodid) {
    // temp id hack
    newTodid.id =
      todidOnce.length + todidTwice.length + todidFiveTimes.length + 1;

    // format
    let formattedTodid = (
      <TodidItem
        text={`${newTodid.text} ${newTodid.id}`}
        key={"id_" + newTodid.id}
      />
    );

    if (newTodid.todiderations === 1) {
      setTodidOnce((prev) => [...prev, formattedTodid]);
    } else if (newTodid.todiderations === 2) {
      setTodidTwice((prev) => [...prev, formattedTodid]);
    } else if (newTodid.todiderations === 5) {
      setTodidFiveTimes((prev) => [...prev, formattedTodid]);
    }
  }

  // prepare headers for existing categories...
  const todidOnceHeader = todidOnce.length > 0 && (
    <TodidCategory todiderations={1} key={"cat_1"} />
  );
  const todidTwiceHeader = todidTwice.length > 0 && (
    <TodidCategory todiderations={2} key={"cat_2"} />
  );
  const todidFiveTimesHeader = todidFiveTimes.length > 0 && (
    <TodidCategory todiderations={5} key={"cat_5"} />
  );

  return (
    <Container component="div" maxWidth="sm">
      <Paper variant="outlined" className={classes.paper}>
        <Typography component="h1" variant="h2">
          Todid List
        </Typography>
        <AddItemForm addTodid={addTodid} />
        {todidOnceHeader}
        {todidOnce.map((todid) => todid)}

        {todidTwiceHeader}
        {todidTwice.map((todid) => todid)}

        {todidFiveTimesHeader}
        {todidFiveTimes.map((todid) => todid)}
      </Paper>
    </Container>
  );
}
