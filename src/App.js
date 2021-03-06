import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import TodidList from "./components/TodidList";
import {
  CssBaseline,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import UserTodidList from "./routes/UserTodidList";
import UserHome from "./routes/UserHome";
import UserAbout from "./routes/UserAbout";
import UserSettings from "./routes/UserSettings";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          {/* temporary */}
          <Route exact path="/todidlist" component={TodidList} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/usertodidlist" component={UserTodidList} />
          <Route exact path="/userabout" component={UserAbout} />
          <Route exact path="/usersettings" component={UserSettings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
