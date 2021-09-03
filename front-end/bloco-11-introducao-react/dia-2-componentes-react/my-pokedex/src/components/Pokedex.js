import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;  
    return (
      <main className="pokedex">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </main>
    );
  }
}

Pokedex.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        })),
        image: PropTypes.string,
    })).isRequired,
};

Pokedex.defaultProps = {
    pokemons: [],
};

export default Pokedex;