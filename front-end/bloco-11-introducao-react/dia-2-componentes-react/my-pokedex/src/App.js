import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';

import './App.css';

class App extends React.Component{
  render () {
    return (
      <div className="App">
        <h1>Pokédex</h1>
        <Pokedex pokemons={ pokemons } />
      </div>
    );
  }
}

export default App;
