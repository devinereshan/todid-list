import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreHoriz } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  todidRow: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todidItem: {
    textDecoration: "line-through",
    color: green[500],
  },
}));

export default function TodidItem(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event);
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.todidRow}>
          <FormControlLabel
            control={<Checkbox checked={true} className={classes.checkbox} />}
            label={
              <Typography variant="body1" className={classes.todidItem}>
                {props.text}
              </Typography>
            }
          />
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHoriz />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Remove</MenuItem>
          </Menu>
        </Paper>
      </Grid>
    </Grid>
  );
}
