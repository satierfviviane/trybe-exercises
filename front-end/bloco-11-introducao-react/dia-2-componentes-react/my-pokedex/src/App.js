import React from 'react';
import Pokemon from './components/Pokemon';
import pokemons from './data';

import './App.css';

class App extends React.Component{
  render () {
    return (
      <div className="App">
        <h1>My Pokédex</h1>
        {pokemons.map((pokemon) => <Pokemon pokemon={ pokemon }/>)}
      </div>
    );
  }
}

export default App;
