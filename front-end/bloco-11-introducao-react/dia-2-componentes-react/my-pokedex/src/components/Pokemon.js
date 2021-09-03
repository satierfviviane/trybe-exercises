import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon">
        <div>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.type}</p>
          <p>{`Average Weight ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
