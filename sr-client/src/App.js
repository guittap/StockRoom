import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/Navbar";

// pages
import home from "./pages/home";
import login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
