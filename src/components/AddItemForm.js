import React from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
  },
}));

export default function AddItemForm(props) {
  const [todidit, setTodidit] = React.useState(null);
  const handleChange = (event) => {
    setTodidit(event.target.value);
  };
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(todidit);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="todidit"
        label="What have you done?"
        name="todidit"
        autoFocus
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        I did it!
      </Button>
    </form>
  );
}
