import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; //import it here on the top so we can override some of it with our own css

import "./App.css";

import NavBar from "./components/layouts/NavBar";
import Dashboard from "./components/layouts/Dashboard";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
