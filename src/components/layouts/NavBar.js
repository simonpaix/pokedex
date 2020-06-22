import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {/* first bracket in style={{ makes the compile understand we'll be writing JavaScript. Second bracket is to pass an object */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <a className="navbar-brand col-md-2 mr-0 align-items-center">Pokedex</a>
        </nav>
      </div>
    );
  }
}
