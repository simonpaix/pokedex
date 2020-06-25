import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import spinner from "../pokemon/spinner.gif";

// Styled helps us to create styled components. Here we create a styled image tag to use in the card
// Don't show the sprite until it is loaded, so we start display as none
const Sprite = styled.img`
  width: 5em;
  heigth: 5em;
  display: none;
`;

// Style the PokemonCard
const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); //smoothly shows the box-shadow
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  }
  //Blocks user from selecting and dragging the component
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

// Style the links in the cards
const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover{
    color:black;
  }
`;

//PokemonCard for a single pokemon
export default class PokemonCard extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    imageLoading: true,
    imageError: false,
  };

  componentDidMount() {
    /* We can do it like this
    const name = this.props.name;
    const url = this.props.url;
    or like this: */
    const { name, url } = this.props;

    const pokemonIndex = url.split("/")[url.split("/").length - 2];

    // Image url in  github repository, find by its pokemonIndex
    // Note we use the tick marks (``) to wrap the url so the compiler understands the ${pokemonIndex} bit
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=True`;

    //  This   this.setState({name:name, imageUrl: imageUrl, pokemonIndex:pokemonIndex}) is equivalent to (when the key has the same name as the value):
    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      // Each card is gonna spend 3 blocks (out of the 12 that bootstrap has) in medium screens , so have 4 cards per row
      // and if the browser is smaller it will take 6 blocks, so half of the screen and have 2 cards per row
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          {/* Card is a bootstrap class */}
          <Card className="card">
            <h5 className="card-header">{this.state.pokemonIndex} </h5>

            {/* If the image is still loading, show a spin */}
            {this.state.imageLoading ? (
              <Sprite
                src={spinner}
                id="gif"
                className="card-img-top rounded mx-auto d-block mt-2 "
              />
            ) : null}

            {/* here we use our Sprite tag, which was defined as a 5x5 image tag */}
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              // onLoad and onError standard Javascript events help to set the state
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ imageError: true })}
              src={this.state.imageUrl}
              style={
                // If image error, don't show the unloaded sprite
                this.state.imageError
                  ? { display: "none" }
                  : // If image finished loading, show the sprite (display:block)
                  this.state.imageLoading
                  ? null
                  : { display: "block" }
              }
            ></Sprite>

            {/* Show a error message in case couldn't load the image */}
            {this.state.imageError ? (
              <h6 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  Try reloading the image
                </span>
              </h6>
            ) : null}
            {/* mxauto sets the margin to auto */}
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (word) => word.charAt(0).toUpperCase() + word.substring(1)
                  )
                  .join(" ")}
              </h6>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}
