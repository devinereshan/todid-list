import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
  },
  radioContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
}));

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
    <form onSubmit={handleSubmit}>
      <Box className={classes.root}>
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
          I todid it!
        </Button>
      </Box>
      <Box className={classes.radioContainer}>
        <FormLabel>How Many Times?</FormLabel>
        <RadioGroup
          row
          aria-label="iterations"
          name="iterations"
          defaultValue="1"
          value={todiderations}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="1"
            control={<Radio color="secondary" />}
            label="Once"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="secondary" />}
            label="At least twice"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="5"
            control={<Radio color="secondary" />}
            label="More than five times"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </Box>
    </form>
  );
}
