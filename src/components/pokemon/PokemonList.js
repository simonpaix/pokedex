import React, { Component } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

export default class PokemonList extends Component {
  state = {
    // PokeApi URL path to pokelist
    url: "https://pokeapi.co/api/v2/pokemon?limit=20",

    // pokemon is the object where we will save the entire pokemon JSON with all pokemons
    pokemonList: null,
  };

  // ComponentDidMount is a default function in React Components called when the component has initialized its variables
  // including its state and has mounted to the UI = it's visible to the user.
  // We use a async funcion to wait until axios got the data before running set state to render it
  async componentDidMount() {
    // get the json Pokelist from PokeAPI
    const res = await axios.get(this.state.url);
    // Set the pokemon state to be equal to the results pokemonlist
    // Note that using this.setState is different from just doins this.state = res.data['results']
    // By doing this.setState we make the it rerun the render function, without reloading the whole page.
    this.setState({ pokemonList: res.data["results"] });
  }

  render() {
    return (
      // We use react fragment that works kind like a div, for when we need to return multiple elements. Fragment lets you group
      // a list of children without adding extra nodes to the DOM
      <React.Fragment>
        {/* // If state is not null, pass the pokemon array to the divs in PokemonCard. If it is null, render "loading pokemon" */}
        {this.state.pokemonList ? (
          <div className="row">
            {this.state.pokemonList.map(pokemon => (
              <PokemonCard
              key={pokemon.name}  //we need to pass a key, we could pass name or index 
              name={pokemon.name}
              url={pokemon.url} />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </React.Fragment>
    );
  }
}
