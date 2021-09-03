import React from 'react';


class Pokemon extends React.Component{
    render () {
        const { pokemon } = this.props;
        return (
            <section>
                <h1>{ pokemon.name }</h1>
                <p>{ pokemon.type }</p>
                <img src={ pokemon.image } alt={ pokemon.name } />  

            </section>
        );
    }
}

export default Pokemon;


// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.