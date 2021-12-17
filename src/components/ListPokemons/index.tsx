import React from 'react'

import PokemonCard from '../PokemonCard'

import { Container } from './styles'

interface IListPokemonsProps {
    pokemons: {
        name: string;
        url: string;
    }[];
}

const ListPokemons: React.FC<IListPokemonsProps> = ({ pokemons }) => {

    return (
        <Container>
            {
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url}/>
                ))
            }
        </Container>
    )
}

export default ListPokemons