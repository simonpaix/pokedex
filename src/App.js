import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"; //import it here on the top so we can override some of it with our own css 

import "./App.css";

import NavBar from "./components/layouts/NavBar";
import Dashboard from "./components/layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard/>  
      </div>
    </div>
  );
}

export default App;
