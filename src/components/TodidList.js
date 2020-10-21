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
  // filter the todidData
  const [todidOnce, setTodidOnce] = useState(() =>
    todidData.filter((todid) => todid.todiderations === 1)
  );

  const [todidTwice, setTodidTwice] = useState(() =>
    todidData.filter((todid) => todid.todiderations === 2)
  );

  const [todidFiveTimes, setTodidFiveTimes] = useState(() =>
    todidData.filter((todid) => todid.todiderations === 5)
  );

  function addTodid(newTodid) {
    // temp id hack
    newTodid.id =
      todidOnce.length + todidTwice.length + todidFiveTimes.length + 1;

    if (newTodid.todiderations === 1) {
      setTodidOnce((prev) => [...prev, newTodid]);
    } else if (newTodid.todiderations === 2) {
      setTodidTwice((prev) => [...prev, newTodid]);
    } else if (newTodid.todiderations === 5) {
      setTodidFiveTimes((prev) => [...prev, newTodid]);
    }
  }

  function removeTodid(todidID, todiderations) {
    if (todiderations === 1) {
      setTodidOnce((prev) => prev.filter((todid) => todid.id !== todidID));
    } else if (todiderations === 2) {
      setTodidTwice((prev) => prev.filter((todid) => todid.id !== todidID));
    } else if (todiderations === 5) {
      setTodidFiveTimes((prev) => prev.filter((todid) => todid.id !== todidID));
    }
  }

  function formatTodid(todid) {
    return (
      <TodidItem
        text={todid.text}
        key={"id_" + todid.id}
        todidID={todid.id}
        todiderations={todid.todiderations}
        removeTodid={removeTodid}
      />
    );
  }

  function formatTodidData(data) {
    return data.map((todid) => formatTodid(todid));
  }

  // format todidData for rendering
  const TodidOnce = () => formatTodidData(todidOnce);
  const TodidTwice = () => formatTodidData(todidTwice);
  const TodidFiveTimes = () => formatTodidData(todidFiveTimes);

  const classes = useStyles();

  // prepare headers for existing categories
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
        <Typography component="h1" variant="h3">
          Todid List
        </Typography>
        <AddItemForm addTodid={addTodid} />
        {todidOnceHeader}
        <TodidOnce />

        {todidTwiceHeader}
        <TodidTwice />

        {todidFiveTimesHeader}
        <TodidFiveTimes />
      </Paper>
    </Container>
  );
}
