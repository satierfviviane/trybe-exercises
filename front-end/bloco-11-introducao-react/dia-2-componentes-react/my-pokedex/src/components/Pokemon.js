import React from 'react';


class Pokemon extends React.Component{
    render () {
        const { pokemon } = this.props;
        return (
            <section className="pokemon-card">
                <h1>{ pokemon.name }</h1>
                <p>{ pokemon.type }</p>
                <p>{`Average Weight ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
                <img src={ pokemon.image } alt={ pokemon.name } />  

            </section>
        );
    }
}

export default Pokemon;


