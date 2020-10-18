import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import TodidList from "./components/TodidList";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        {/* temporary */}
        <Route exact path="/todidlist" component={TodidList} />
      </Switch>
    </Router>
  );
}

export default App;
