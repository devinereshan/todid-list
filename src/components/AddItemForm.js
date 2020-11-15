import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { ExpandMore } from "@material-ui/icons";
import { Typography, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  formBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
  },
  radioContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    },
  },
  radioTitle: {
    textAlign: "center",
  },
}));

function ResponsiveRadioGroup(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <RadioGroup
      row={matches}
      aria-label="iterations"
      name="iterations"
      defaultValue="1"
      value={props.todiderations}
      onChange={props.onChange}
    >
      {props.children}
    </RadioGroup>
  );
}

function ResponsiveRadioButton(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <FormControlLabel
      value={props.value}
      control={<Radio color="secondary" />}
      label={props.label}
      labelPlacement={matches ? "bottom" : "end"}
    />
  );
}

export default function AddItemForm(props) {
  const [todidText, setTodid] = useState("");
  const [todiderations, setTodiderations] = useState("1");

  const classes = useStyles();

  const handleTextChange = (event) => {
    setTodid(event.target.value);
  };

  const handleRadioChange = (event) => {
    setTodiderations(event.target.value);
  };

  const handleSubmit = (event) => {
    setTodid("");
    props.addTodid({
      text: todidText,
      todiderations: Number(todiderations),
      id: null,
    });

    event.preventDefault();
  };

  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="add-todid-item"
        id="add-todid-header"
      >
        <Typography variant="body1">Add New Todid</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Box className={classes.formBox}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="newTodidText"
              label="Tell us what you did!"
              name="newTodidText"
              autoFocus
              onChange={handleTextChange}
              value={todidText}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Todid it!
            </Button>
          </Box>
          <Box className={classes.radioContainer}>
            <Grid item className={classes.radioTitle}>
              <FormLabel>How Many Times?</FormLabel>
            </Grid>
            <ResponsiveRadioGroup
              todiderations={todiderations}
              onChange={handleRadioChange}
            >
              <ResponsiveRadioButton value="1" label="Once" />
              <ResponsiveRadioButton value="2" label="At least twice" />
              <ResponsiveRadioButton value="5" label="More than five times" />
            </ResponsiveRadioGroup>
          </Box>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}
